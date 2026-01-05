const { Op } = require("sequelize");
const Booking = require("../model/Booking");
const Room = require("../model/Room");

class DashboardController {
  static dashboardcard = async (req, res) => {
    try {
      const roomcount = await Room.count();
      const bookedroomcount = await Booking.count({
        where: {
          booking_status: {
            [Op.in]: ["checked_in", "confirmed", "pending"],
          },
        },
      });
      const roomavailablecount = await Room.count({
        where: { available: true },
      });

      res.json({
        message: "Data fetched Successfully",
        roomcount,
        bookedroomcount,
        roomavailablecount,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
}

module.exports = DashboardController;
