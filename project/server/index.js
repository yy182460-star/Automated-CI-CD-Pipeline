import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import tourRoute from "./routes/tour.js";
import userRoute from "./routes/users.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 8000;
const corsPolicy = {
  origin: "*",
  credentials: true,
};

// To check server is running on port
app.get("/", (req, res) => {
  res.send(`api is working on port ${port}`);
});

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch {
    console.log(`MongoDb Connect Failed`);
  }
};

// middleware
app.use(express.json());
app.use(cors(corsPolicy));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, "0.0.0.0", () => {
  connect();
  console.log(`server listening on port ${port}`);
});
