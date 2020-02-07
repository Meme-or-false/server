'use strict';

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    highest_score: {
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        if (user.password) {
          user.password = bcrypt.hashSync(user.password, 10);
        }
      }
    },
    sequelize
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Match);
  };
  
  return User;
};