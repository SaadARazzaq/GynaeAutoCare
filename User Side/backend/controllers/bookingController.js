import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const createBooking = async (req, res) => {
  try {
    // Get the currently booked doctor
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    // Ensure that the doctor and user objects are valid
    if (!doctor || !user) {
      return res.status(404).json({ success: false, message: "Doctor or user not found" });
    }

    // Create a booking object with the necessary details
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
    });

    // Save the booking object to the database
    await booking.save();

    // Send the created booking as a response
    res.status(200).json({ success: true, message: "Booking created successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating booking" });
  }
};
