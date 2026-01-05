const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lead = sequelize.define("Lead", {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_no: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  phone_no_two: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
}
);

module.exports = Lead;
