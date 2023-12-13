import express from 'express';
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

// Route to create a booking
router.post('/:doctorId', createBooking);

export default router;
