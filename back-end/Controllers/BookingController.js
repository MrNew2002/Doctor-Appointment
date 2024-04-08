import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = req.userId;

    const booking = new Booking({
      doctor: req.params.doctorId,
      user: user,
      ticketPrice: doctor.ticketPrice,
    });
    await booking.save();
    res.status(200).json({ success: true, message: "Successfully paid" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
