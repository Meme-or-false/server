"use strict";

const { User, Match } = require("../models");

class MatchController {
  static updateHighestScore(req, res, next) {
    const userData = {
      email: req.body.email
    };

    User.findOne({ where: { email: userData.email } })
      .then(user => {
        return User;
      })
  }
}


module.exports = MatchController;