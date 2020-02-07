'use strict'

const { User, Match } = require('../models')

class MatchController {
  // waktu selesai main, update score
  static updateHighestScore(req, res, next) {
    const userData = {
      email: req.user.email,
      match_id: req.body.match_id
    }

    Match.findOne({ where: { id: userData.match_id }, include : User })
      .then((match) => {
        let temp = match.score

        if(temp < match.User.highest_score){
          temp = match.User.highest_score
        }
        return User.update(
          { highest_score: temp },
          { where: { email: userData.email } }
        )
      })
      .then((user) => {
        res
          .status(200)
          .json({ message: 'Successfully updated user highest score!' })
      })
      .catch((err) => {
        next(err)
      })
  }

  // waktu lagi main, update score
  static updateMatchScore(req, res, next) {
    const updateData = {
      match_id: req.body.match_id,
      score: 100
    }

    Match.findOne({ where: { id: updateData.match_id } })
      .then((match) => {
        return Match.update(
          { score: match.score + updateData.score },
          { where: { id: updateData.match_id } }
        )
      })
      .then((updatedMatch) => {
        res.send(200).json({ message: 'Successfully added score!' })
      })
      .catch((err) => {
        next(err)
      })
  }

  //  selesai main, hapus score temporer si user
  static endMatch(req, res, next) {
    Match.destroy({ where: { id: req.body.match_id } })
      .then((match) => {
        res.status(200).json({ message: 'Successfully ended match!' })
      })
      .catch((err) => {
        next(err)
      })
  }

  static startMatch(req, res, next) {
    Match.create({ UserId: req.user.id, score: 0 })
      .then((match) => {
        res.status(200).json({ match_id: match.id })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = MatchController
