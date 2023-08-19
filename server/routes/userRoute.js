import express from 'express';
import { bookVisit, createUser, allBookings } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/book/:id', bookVisit);
router.get("/bookings", allBookings)

export { router as userRoute };
