import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingController.js";
const router = express.Router();

// To create a new booking
router.post("/", verifyUser, createBooking);
// To get single booking
router.get("/:id", verifyUser, getBooking);
// To get all booking
router.get("/", verifyAdmin, getAllBooking);

export default router;
