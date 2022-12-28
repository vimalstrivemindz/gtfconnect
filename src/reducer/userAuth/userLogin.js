import { createSlice } from "@reduxjs/toolkit";
import { baseUrlAuth } from "../../store/axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialUserState = {
  userLoginData: [],
  status: STATUSES.IDLE,
};

const userLoginSlice = createSlice({
  name: "user",
  initialState: initialUserState,

  reducers: {
    fetchUserLogin(state, action) {
      state.userLoginData = action.payload;
    },
    fetchUserEmailVerification(state, action) {
      state.emailVerification = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { fetchUserLogin, setStatus } =
  userLoginSlice.actions;

export const fetchUserLogins = (payload) => {
  const formData = new FormData();
  formData.append("Email", payload?.values.Username);
  formData.append("Password", payload?.values.password);
  formData.append("IsLogging", true);
  formData.append("logout", 0);
  formData.append("is_gtf_connect", 1);
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth
        .post("login", formData, {
          headers: {
            "Content-Type": "application/json",
            DeviceToken: "test_token",
            DeviceType: "Ios",
          },
        })
        .then((response) => {
          dispatch(fetchUserLogin(response?.data));
          dispatch(setStatus(STATUSES.IDLE));
        });
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};


export default userLoginSlice.reducer;
