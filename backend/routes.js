const express = require("express")
const Movie = require("./models/moviesModel")
const router = express.Router()

router.get("/movies", async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json({
        message: "All movies fetched!",
        movies: movies
    })
})

router.post("/movies", async (req, res) => {
    const movie = new Movie({
        title: req.body.title
    })
    console.log(movie)
    await movie.save()
    res.send(movie)
})

module.exports = router