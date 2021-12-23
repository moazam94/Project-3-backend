'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models.order.belongsToMany(models.item, {through: 'orderItems'});
      //models.order.belongsTo(models.user)// define association here
    }
  };
  order.init({
    userId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip: DataTypes.INTEGER,
    cardInfo: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};