
const axios = require('axios').default;

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
        res.status(200).json(trivias)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = Trivia