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
    if (password) {
      validatePassword(password);
      updateFields.password = bcryptjs.hashSync(password, 10);
    }

    // Validate and handle username
    if (username) {
      validateUsername(username);
      updateFields.username = username;
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
