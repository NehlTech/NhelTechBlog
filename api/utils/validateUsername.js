import { errorHandler } from "./error.js";

// Helper function to validate username
export const validateUsername = (username) => {
  // if (username.length < 7 || username.length > 20) {
  //   throw new Error("Username must be between 7 and 20 characters");
  if (username.length < 7 || username.length > 20) {
    throw new Error("Username must be between 7 and 20 characters");
  }
  if (username.includes(" ")) {
    throw new Error("Username cannot contain spaces");
    // return next(errorHandler(400, "Username cannot contain spaces"));
  }
  if (username !== username.toLowerCase()) {
    throw new Error("Username must be lowercase");
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    throw new Error("Username can only contain letters and numbers");
  }
  // if (username.length < 0) {
  //   throw new Error("Username cannot be empty");
  // }
};
