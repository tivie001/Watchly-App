const express = require("express")
const WatchList = require("./models/watchListModel")
const FavList = require("./models/favoritesModel")
const router = express.Router()

router.get("/movies", async (req, res) => {
    const watchList = await WatchList.find()
    res.status(200).json({
        message: "Watchlist fetched!",
        watchList: watchList
    })
})
router.get("/favorites", async (req, res) => {
    const favorites = await FavList.find()
    res.status(200).json({
        message: "All favorite movies fetched!",
        favorites: favorites
    })
})

router.post("/addList", async (req, res) => {
    WatchList.create({
        title: req.body.title,
        moviePoster: req.body.img, 
        dateReleased: req.body.dateReleased,
        watched: req.body.watched

    }, (err) => {
        if (err)
            console.log(err);
            WatchList.find((err, lists) => {
            if (err)
                console.log(handleError(err))
            res.json(lists)
        })
    })
})
router.post("/addFavorite", async (req, res) => {
    FavList.create({
        title: req.body.title,
        moviePoster: req.body.img,
        dateReleased: req.body.dateReleased,
        watched: req.body.watched

    }, (err) => {
        if (err)
            console.log(err);
            FavList.find((err, lists) => {
            if (err)
                console.log(handleError(err))
            res.json(lists)
        })
    })
})
router.put('/updateList/:id', (req, res) => {
    WatchList.findById(req.params.id, (err, list) => {
        if (err)
            console.log(handleError(err));
        list.update(req.body, (err) => {
            if (err)
                console.log(err);
            WatchList.find((err, list) => {
                if (err)
                    console.log(handleError(err));
                res.json(list);
            })
        })
    })
})

module.exports = router