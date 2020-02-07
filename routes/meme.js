const router = require('express').Router()
const axios = require('axios').default

router.get('/', function(req, res, next) {
  axios({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.MEME_API_KEY}&q=meme`
  })
    .then(({ data }) => {
      const index = Math.floor(Math.random() * data.data.length)
      res.status(200).json(data.data[index].images.original.mp4)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
