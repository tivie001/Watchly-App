const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
    title: String
})

module.exports = mongoose.model("Movie", movieSchema)