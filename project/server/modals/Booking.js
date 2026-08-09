import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
      default: 1,
    },
    phone: {
      type: Number,
      required: true,
    },
    photo: {
      type: Number,
      // required: true,
    },
    bookAt: {
      type: Date,
      // required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
