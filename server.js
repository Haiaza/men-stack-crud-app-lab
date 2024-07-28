const dotenv = require('dotenv')
dotenv.config() // loading the enviornment variables
//server requirements
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI
//initialize the server
const app = express()
app.use(logger('dev'))

const Movie = require('./models/movie')

mongoose.connect(MONGODB_URI)
mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3000, () =>{
    console.log('Port 3000 is active')
})

//* READ
// GET Requests
app.get('/test', async (req, res) =>{
    res.render('./movies/test.ejs')
    console.log(`${req.path} page`) 
})

