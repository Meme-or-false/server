const router = require('express').Router()
const userController = require('../controllers/user')
// tambahin sendiri routernya
const memeRouter = require('./meme')
const triviaRouter = require('./trivia')
const yandexRouter = require("./yandex");
const matchRouter = require("./match");
const authenticate = require("../middlewares/authenticate");
const errorHandler = require("../middlewares/errorHandler");

router.post('/g-sign', userController.googleSignIn)
router.post("/login", userController.login);
router.post("/register", userController.register);

router.use(authenticate);
router.get('/highest-score', userController.getScore)
router.use('/memes', memeRouter);
router.use('/trivia', triviaRouter);
router.use("/yandex", yandexRouter);
router.use("/match", matchRouter);

router.use(errorHandler);

module.exports = router;