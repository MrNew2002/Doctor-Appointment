import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getUserProfile,
  getMyAppointments,
} from "../Controllers/userController.js";
import express from "express";
import { authentication, restrict } from "../auth/verifyToken.js";
const router = express.Router();

router.get("/:id", authentication, restrict(["patient"]), getSingleUser);
router.get("/", authentication, restrict(["admin"]), getAllUser);
router.put("/:id", authentication, restrict(["patient"]), updateUser);
router.delete("/:id", authentication, restrict(["patient"]), deleteUser);
router.get(
  "/profile/me",
  authentication,
  restrict(["patient"]),
  getUserProfile
);
router.get(
  "/appointments/my-appointments",
  authentication,
  restrict(["patient"]),
  getMyAppointments
);

export default router;
