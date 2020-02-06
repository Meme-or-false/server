const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mainRouter = require('./routes')

app.use('/', mainRouter)

const errorHandler = require('./middlewares/errorHandler')

app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}!`))
