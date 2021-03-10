const express = require("express")
const mongoose = require("mongoose")
const movieRoutes = require("./routes")
const bodyParser = require("body-parser")
// mongodb + srv://dbAdmin:p5UoCrjcL8Fw394z@watchlydb.cyhzd.mongodb.net/watchly?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://dbAdmin:p5UoCrjcL8Fw394z@watchlydb.cyhzd.mongodb.net/watchly?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", movieRoutes)
    app.listen(5000, () => {
        console.log("Server has started")
    })
})