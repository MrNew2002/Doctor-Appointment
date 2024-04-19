import express from "express";
import { authentication } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../Controllers/BookingController.js";

const router = express.Router();
router.post("/checkout/:doctorId", authentication, getCheckoutSession);

export default router;
