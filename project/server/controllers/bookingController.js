import Booking from "../modals/Booking.js";

// Create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked successfully",
      data: savedBooking,
    });
  } catch (err) 
  {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


// Get single booking information
export const getBooking = async (req, res) =>{
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res.status(200).json({
            success: true,
            message: "Successfull",
            data: book,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
}


// Get all booking information
export const getAllBooking = async (req, res) =>{

    try {
        const books = await Booking.find();
        res.status(200).json({
            success: true,
            message: "Successfull",
            data: books,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "internal error",
        });
    }
}