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
    AlturaMax:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AlturaMin:{
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
    Indb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    img:{
      type: DataTypes.STRING
    }
  });
};


