const mongoose = require("mongoose")
const watchListSchema = mongoose.Schema({
    title: String,
    moviePoster: String,
    dateReleased: String
})

module.exports = mongoose.model("WatchList", watchListSchema)