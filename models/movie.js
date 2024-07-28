const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    snooze: { type: String, required: false },
    releaseDate: { type: Date }})
const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie