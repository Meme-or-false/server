const router = require('express').Router()

// tambahin sendiri routernya
const memeRouter = require('./meme')

router.use('/memes', memeRouter)

module.exports = router
