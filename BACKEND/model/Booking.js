const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Room = require("./Room");

const Booking = sequelize.define(
  "Booking",
  {
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    check_in_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    check_out_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    number_of_guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },

    number_of_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },

    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Rooms", 
        key: "id",
      },
    },

    price_per_night: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    total_nights: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    booking_status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "cancelled",
        "checked_in",
        "checked_out"
      ),
      defaultValue: "pending",
      allowNull: false,
    },

    special_request: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
    // Optional but recommended
    timestamps: true,
    underscored: true,
  }
);

// Associations
Room.hasMany(Booking, { foreignKey: "room_id" });
Booking.belongsTo(Room, { foreignKey: "room_id" });

module.exports = Booking;