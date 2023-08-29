import express from 'express';
import {
  addToFavorites,
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/book/:id', bookVisit);
router.post('/bookings', getAllBookings);
router.post('/cancelBooking/:id', cancelBooking);
router.post('/addToFavorites/:rid', addToFavorites);
router.post('/getAllFavorites', getAllFavorites)

export { router as userRoute };
