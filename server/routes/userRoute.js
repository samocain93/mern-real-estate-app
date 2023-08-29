import express from 'express';
import {
  bookVisit,
  createUser,
  getAllBookings,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/book/:id', bookVisit);
router.post('/bookings', getAllBookings);

export { router as userRoute };
