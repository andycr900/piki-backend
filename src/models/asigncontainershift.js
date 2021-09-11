'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asignContainerShift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      asignContainerShift.belongsTo(models.container);
      asignContainerShift.belongsTo(models.shift);
    }
  };
  asignContainerShift.init({
    containerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'containers',
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION',
    },
    shiftId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shifts',
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION',
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'asignContainerShift',
  });
  return asignContainerShift;
};