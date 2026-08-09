import User from '../modals/User.js';



// create new User
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);
  
    try {
      const savedUser = await newUser.save();
  
      res.status(200).json({
        success: true,
        message: "Successfully created ",
        data: savedUser,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to create. Try again",
      });
    }
  };
  
  // Update User
  export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: updatedUser,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to update.",
      });
    }
  };
  
  // Delete User
  export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
      await User.findByIdAndDelete(id);
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted the User",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to delete.",
      });
    }
  };
  
  // get single User User
  export const getSingleUser = async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
  
      res.status(200).json({
        success: true,
        message: "Successfully fetched single User",
        data: user,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };
  
  // get all User
  export const getAllUser = async (req, res, next) => {
   
    try {
      const users = await User.find({})

      res.status(200).json({
        success: true,
        message: "Successfully fetched All User",
        data: users,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };