const router = require('express').Router()

// tambahin sendiri routernya
const memeRouter = require('./meme')
const triviaRouter = require('./trivia')

router.use('/memes', memeRouter)
router.use('/trivia', triviaRouter)

module.exports = router
