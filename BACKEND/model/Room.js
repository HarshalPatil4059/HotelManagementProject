const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Room = sequelize.define("Room", {
  room_name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  room_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  floor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bedType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  amenities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  available: {
    type: DataTypes.STRING,
    defaultValue: "available",
  },
});

freezeTableName: true

module.exports = Room;
