import express from "express";
import { authentication } from "../auth/verifyToken.js";
import { sendMailContactController } from "../Controllers/contactController.js";

const router = express.Router();
router.post("/", sendMailContactController);
export default router;
