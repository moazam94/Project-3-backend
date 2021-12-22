'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.item.belongsToMany(models.order, {through: 'orderItems'})// define association here
    }
  };
  items.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};