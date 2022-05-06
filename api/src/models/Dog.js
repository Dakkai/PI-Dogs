const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    alturaMax:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alturaMin:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pesoMax:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pesoMin:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
    },
    In:{
      type: DataTypes.STRING,
      defaultValue: "DB"
    },
    img:{
      type: DataTypes.TEXT
    }
  });
};


