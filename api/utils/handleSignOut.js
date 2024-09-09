import { signOutSuccess } from "../../client/src/redux/user/userSlice"; // Adjust the import path as needed

export const handleSignOut = (dispatch) => async () => {
  try {
    const res = await fetch("/api/user/signout", {
      method: "POST",
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signOutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
};
