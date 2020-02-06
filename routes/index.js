const router = require('express').Router()

// tambahin sendiri routernya
const memeRouter = require('./meme')
const yandexRouter = require("./yandex");

router.use('/memes', memeRouter)
router.use("/yandex", yandexRouter);

module.exports = router
