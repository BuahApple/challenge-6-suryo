'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_game_histories.init({
    userid: DataTypes.INTEGER,
    win: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_histories',
  });
  return user_game_histories;
};