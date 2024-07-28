const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie