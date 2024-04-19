import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import { sendMailBooking } from "../helper/sendmail.js";
export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);
    const timeSlots = req.body;
    const overlappingBooking = await Booking.findOne({
      doctor: doctor,
      date: timeSlots.date,
      $or: [
        {
          startingTime: {
            $lt: timeSlots.time.endingTime,
            $gte: timeSlots.time.startingTime,
          },
        },
        {
          endingTime: {
            $gt: timeSlots.time.startingTime,
            $lte: timeSlots.time.endingTime,
          },
        },
      ],
    });

    if (overlappingBooking) {
      return res.status(400).json({
        success: false,
        message: "The requested timeslot is already booked.",
      });
    }

    const booking = new Booking({
      doctor: doctor,
      user: user,
      ticketPrice: doctor.ticketPrice,
      date: timeSlots.date,
      startingTime: timeSlots.time.startingTime,
      endingTime: timeSlots.time.endingTime,
    });

    await booking.save();
    if (booking) {
      await sendMailBooking(user.email, booking);
    }
    res.status(200).json({ success: true, message: "Successfully booking" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateBooking = async (req, res) => {
  const id = req.params.bookingId;
  try {
    const updateBooking = await Booking.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to updated",
    });
  }
};
