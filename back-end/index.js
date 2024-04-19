import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./Routes/auth.js";
import userRouter from "./Routes/user.js";
import doctorRouter from "./Routes/doctor.js";
import reviewRouter from "./Routes/review.js";
import bookingRouter from "./Routes/booking.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (reg, res) => {
  res.send("api is working");
});

//database
mongoose.set("strictQuery", false);
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB error");
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/auth", authRouter); //domain/api/v1/auth
app.use("/api/v1/users", userRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/bookings", bookingRouter);
app.listen(port, () => {
  connectdb();
  console.log("listening on port: " + port);
});
