import express from "express";
import { authentication } from "../auth/verifyToken.js";
import {
  getCheckoutSession,
  updateBooking,
} from "../Controllers/BookingController.js";

const router = express.Router();
router.post("/checkout/:doctorId", authentication, getCheckoutSession);
router.put("/:bookingId", updateBooking);
export default router;
