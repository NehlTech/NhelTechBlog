// Helper function to validate password
export const validatePassword = (password) => {
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
};
