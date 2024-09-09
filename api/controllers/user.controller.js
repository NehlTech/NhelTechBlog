import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import { validateUsername } from "../utils/validateUsername.js";
import { validatePassword } from "../utils/validatePassword.js";

export const test = (req, res) => {
  res.json({ Message: "Api is working!" });
};

// Main function to handle user update
export const updateUser = async (req, res, next) => {
  try {
    // Check if the current user is authorized to update the profile
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, "You are not allowed to update this user"));
    }

    // Extract fields from request body
    const { username, email, profilePicture, password } = req.body;
    const updateFields = {};

    // Validate and handle password
    try {
      if (password) {
        validatePassword(password);
        updateFields.password = bcryptjs.hashSync(password, 10);
      }
    } catch (error) {
      console.error(error.message);
    }

    // Validate and handle username
    if (username) {
      try {
        validateUsername(username);
        updateFields.username = username;
      } catch (error) {
        // return next(errorHandler(400, error.message));
        console.error(error.mesage);
      }
    }

    // Handle optional fields
    if (email) updateFields.email = email;
    if (profilePicture) updateFields.profilePicture = profilePicture;

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: updateFields },
      { new: true }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = updatedUser._doc;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};

// Main function to handle user delete
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
