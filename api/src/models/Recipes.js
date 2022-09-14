// const {prueba} = require('../../prueba.jpg')
const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('recipes', {
    id: {
      type: DataTypes.UUID,      
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.TEXT,
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: true, 
    }
  },{
    timestamps: false
  });
};
