const Booking = require("../model/Booking");

class BookingController {


    static AddBooking = async (req,res) =>{
        try {
            const bookingData = req.body;
            const booking = await Booking.create(bookingData);
            res.json({success:true, data: booking})
            
        } catch (error) {
        console.log("Error in function",error);
        
        }
    }

    static Allbookings = async (req,res)=>{
       try {
        const Allbookings = await Booking.findAll();
        res.status(201).json({success:true, data:Allbookings})
       } catch (error) {
        
       }
    }

    static getbookingbyid = async (req,res)=>{
       try {
        const {id} = req.param;
        const booking = await Booking.findOne({
            where:{id}
        });
        res.status(201).json({success:true, data:booking})
       } catch (error) {
        
       }
    }
}

module.exports = BookingController