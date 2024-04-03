import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile,
} from "../Controllers/doctorController.js";
import express from "express";
import { authentication, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authentication, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authentication, restrict(["doctor"]), deleteDoctor);
router.get(
  "/profile/me",
  authentication,
  restrict(["doctor"]),
  getDoctorProfile
);

export default router;
