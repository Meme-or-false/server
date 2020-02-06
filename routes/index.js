const router = require('express').Router()
const userController = require('../controllers/user')
// tambahin sendiri routernya
const memeRouter = require('./meme')

router.use('/memes', memeRouter)
router.post('/g-sign', userController.googleSignIn)
module.exports = router
