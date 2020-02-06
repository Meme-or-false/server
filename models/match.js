'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Match extends Model { }
  
  Match.init({
    UserId: {
      type: DataTypes.INTEGER
    },
    score: {
      type: DataTypes.INTEGER
    }
  }, { sequelize });

  Match.associate = function(models) {
    // associations can be defined here
    Match.belongsTo(models.User);
  };

  return Match;
};