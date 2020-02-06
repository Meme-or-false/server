const axios = require('axios');

class Trivia {
  static getTrivia() {
    axios({
      method: 'get',
      url: 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
    })
      .then(response => {
        console.log(response.data.results, '< ini response')
      })
      .catch(err => {
        console.log(err, '< ini error')
      })
  }
}

module.exports = Trivia