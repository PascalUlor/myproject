'use strict';
module.exports = (sequelize, DataTypes) => {
  var RecipeModel = sequelize.define('RecipeModel', {
    Id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredient: DataTypes.STRING,
    views: DataTypes.NUMBER,
    upvote: DataTypes.NUMBER,
    downvote: DataTypes.NUMBER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RecipeModel;
};