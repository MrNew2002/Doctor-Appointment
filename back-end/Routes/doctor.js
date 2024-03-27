import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
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

export default router;
