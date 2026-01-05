const express = require("express");
const router = express.Router();
const RoomController = require("../controllers/RoomController");
const { uploadSingleImage } = require("../middleware/upload");
const BookingController = require("../controllers/BookingController");
const LeadController = require("../controllers/LeadController");
const StaffController = require("../controllers/StaffController");
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);


router.post("/add-room", uploadSingleImage, RoomController.addRoom);
router.get("/rooms", RoomController.AllRoom);
router.get("/rooms/:id", RoomController.getroomdtailbyid);


router.post("/add-booking", uploadSingleImage, BookingController.AddBooking);
router.get("/bookings", BookingController.Allbookings);
router.get("/bookings/:id", BookingController.getbookingbyid);

router.post("/add-lead", LeadController.addlead);
router.get("/leads", LeadController.alllead);


router.post("/add-staff",StaffController.addstaff)
router.get("/staffs",StaffController.allstaff)
router.get("/edit-staff",StaffController.editstaff)
router.post("/update-staff",StaffController.updatestaff)

module.exports = router;    
