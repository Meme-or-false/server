const router = require('express').Router()

// tambahin sendiri routernya
const memeRouter = require('./meme')
const triviaRouter = require('./trivia')
const yandexRouter = require("./yandex");

router.use('/memes', memeRouter)
router.use('/trivia', triviaRouter)
router.use("/yandex", yandexRouter);

module.exports = router
