import { createSlice } from "@reduxjs/toolkit";
import { baseUrlAuth } from "../../store/axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialUserState = {
  resendOtpMail: [],
  verifyEmailOtp: [],
  status: STATUSES.IDLE,
};

const userEmailSlice = createSlice({
  name: "userEmail",
  initialState: initialUserState,
  reducers: {
    fetchUserOtpEmail(state, action) {
      state.resendOtpMail = action.payload;
    },
    fetchUserVerifyEmailOtp(state, action) {
      state.verifyEmailOtp = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { fetchUserOtpEmail, fetchUserVerifyEmailOtp, setStatus } =
  userEmailSlice.actions;

export const UserOtpEmails = (payload) => {
  const formData = new FormData();
  formData.append("email", payload);
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth.post("resend-email-otp", formData).then((response) => {
        dispatch(fetchUserOtpEmail(response?.data));
        dispatch(setStatus(STATUSES.IDLE));
      });
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
export const fetchUserVerifyEmailOtps = (payload) => {
  const formData = new FormData();
  formData.append("email", "testuser123@test.com");
  formData.append("otp", 709417);
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth.post("verify-email-otp", formData).then((response) => {
        dispatch(fetchUserVerifyEmailOtp(response?.data));
        dispatch(setStatus(STATUSES.IDLE));
      });
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};

export default userEmailSlice.reducer;
