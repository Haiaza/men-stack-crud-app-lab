const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    snooze: { type: Boolean, required: true },
    releaseYear: { type: Date }})
const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie