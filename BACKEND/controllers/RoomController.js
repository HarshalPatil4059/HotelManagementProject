const Room = require("../model/Room");
class RoomController {
  static addRoom = async (req, res) => {
    try {
      const {
        room_name,
        room_no,
        price,
        capacity,
        floor,
        size,
        bedType,
        amenities = [],
        description,
        available,
      } = req.body;

      if (
        !room_name ||
        !room_no ||
        !price ||
        !capacity ||
        !floor ||
        !size ||
        !bedType
      ) {
        return res.status(400).json({
          success: false,
          message: "Enter all required fields",
        });
      }

      const imageFile = req.file ? req.file.filename : null;
      const amenitiesString = Array.isArray(amenities)
        ? amenities.join(", ")
        : amenities;

      const addRoomData = await Room.create({
        room_name,
        room_no,
        price,
        capacity,
        floor,
        size,
        bedType,
        imageFile,
        amenities: amenitiesString,
        description,
        available,
      });
      res.status(201).json({ success: true, data: addRoomData });
    } catch (error) {
      console.error("Error name:", error);
    }
  };

  static AllRoom = async (req, res) => {
    try {
      const rooms = await Room.findAll({ raw: true });
      res.json(rooms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };

  static getroomdtailbyid = async (req,res) => {
    const {id} = req.params;
    const roomdetails = await Room.findOne({
      where: {id},
    });

    // console.log("roomdetails", roomdetails);
    res.status(201).json({ success: true, data: roomdetails });
  };
}

module.exports = RoomController;
