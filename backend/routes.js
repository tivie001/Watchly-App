const express = require("express")
const WatchList = require("./models/watchListModel")
const router = express.Router()

router.get("/movies", async (req, res) => {
    const watchList = await WatchList.find()
    res.status(200).json({
        message: "All movies fetched!",
        watchList: watchList
    })
})

router.post("/addList", async (req, res) => {
    WatchList.create({
        title: req.body.title,
        moviePoster: req.body.img, 
        dateReleased: req.body.dateReleased

    }, (err) => {
        if (err)
            console.log(err);
            WatchList.find((err, lists) => {
            if (err)
                console.log(handleError(err))
            res.json(lists)
        })
    })
    // console.log(watchList)
    // await watchList.save()
    // res.send(watchList)
})

module.exports = router