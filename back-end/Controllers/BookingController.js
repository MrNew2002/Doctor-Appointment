import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);
    const timeSlots = req.body;
    const booking = new Booking({
      doctor: doctor,
      user: user,
      ticketPrice: doctor.ticketPrice,
      date: timeSlots.date,
      startingTime: timeSlots.time.startingTime,
      endingTime: timeSlots.time.endingTime,
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
