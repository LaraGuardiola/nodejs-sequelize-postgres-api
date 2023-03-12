import { sequelize, Model, DataTypes } from '../database.js'

export class Users extends Model {}

Users.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Users', // We need to choose the model name
    timestamps: false
  })