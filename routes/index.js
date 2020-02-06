const router = require('express').Router()
const userController = require('../controllers/user')
// tambahin sendiri routernya
const memeRouter = require('./meme')
const triviaRouter = require('./trivia')
const yandexRouter = require('./yandex')

router.post('/g-sign', userController.googleSignIn)

router.use('/memes', memeRouter)
router.use('/trivia', triviaRouter)
router.use('/yandex', yandexRouter)
router.use('/trivia', triviaRouter)

module.exports = router
