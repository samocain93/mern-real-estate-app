import express from 'express';
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/book/:id', bookVisit);
router.post('/bookings', getAllBookings);
router.post('/cancelBooking/:id', cancelBooking);

export { router as userRoute };
