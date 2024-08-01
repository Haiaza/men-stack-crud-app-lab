const dotenv = require('dotenv')
dotenv.config() // loading the enviornment variables
//server requirements
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const MONGODB_URI = process.env.MONGODB_URI
//initialize the server
const app = express()
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

const Movie = require('./models/movie')

mongoose.connect(MONGODB_URI)
mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3000, () =>{
    console.log('Port 3000 is active')
})

//* CREATE
// POST Requests
app.post('/movies', async (req, res) =>{
    if (req.body.snooze === 'on') {
        req.body.snooze = false
    } else {
        req.body.snooze = true
    }
    await Movie.create(req.body
        
    )
    console.log(req.body)
    res.redirect('/movies/new')
})

//* READ
// GET Requests
//* Index
app.get('/movies', async (req, res) =>{
    const allMovies = await Movie.find()
    console.log(allMovies)
    res.render("index.ejs", {
        movies : allMovies
    })
})
//* New
app.get('/movies/new', async (req, res) =>{
    res.render('new.ejs')
})
// *Show
app.get('/movies/:id', async (req, res) =>{
    try {
        const theMovie = await Movie.findOne({_id: req.params.id })
        res.render('show.ejs', {
            movie: theMovie
        })
    } catch (error) {
        res.status(400).json({ msg: error.messsage })
    }
})


//* Delete
app.delete('/movies/:id', (req, res) =>{
    res.send(`Were targetting ${req.params.id   } for deletion`)
})

/* Graveyard*/
// app.get('/test', async (req, res) =>{
//     res.render('./movies/test.ejs')
//     console.log(`${req.path} page`) 
// })              