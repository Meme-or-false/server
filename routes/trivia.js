const express = require('express')
const router = express.Router()
const triviaController = require('../controllers/triviaController')

router.get('/', triviaController.getTrivia)

module.exports = router