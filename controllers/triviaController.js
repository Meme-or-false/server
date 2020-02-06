const axios = require('axios');

class Trivia {
  static getTrivia(req, res, next) {
    axios({
      method: 'get',
      url: 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
    })
      .then(({ data }) => {
        let trivias = []
        data.results.forEach(trivia => {
          trivias.push({
            question: trivia.question,
            correct_answer: trivia.correct_answer,
            incorrect_answer: trivia.incorrect_answers[0]
          })
        })
        res.status(200).send(trivias)
      })
      .catch(err => {
        console.log(err, '< ini error')
      })
  }
}

module.exports = Trivia