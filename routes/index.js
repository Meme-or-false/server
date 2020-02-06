const router = require('express').Router()

// tambahin sendiri routernya
const memeRouter = require('./meme')
const yandexRouter = require("./yandex");
const triviaRouter = require('./trivia')

router.use('/memes', memeRouter)
router.use("/yandex", yandexRouter);
router.use('/trivia', triviaRouter)

module.exports = router
