import Review from "../modals/Review.js";
import Tour from "../modals/Tour.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    // after creating the new review noe update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    })
    res.status(200).json({
        success: true,
        message: "Review created successfully",
        data: savedReview
    })
  } catch (err) {
    res.status(500).json({
        success: false,
        message: "failed to create review",
    })
  }
};
