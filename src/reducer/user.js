import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../store/axios";
const initialUserState = {
  data: [],
};
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    fetchUserData(state, action) {
      state.data = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const fetchUserDatas = () => {
  return async (dispatch) => {
    try {
      await baseUrl
        .get("products")
        .then((res) => dispatch(userActions.fetchUserData(res?.data)));
    } catch (error) {
      console.log("error :", error);
    }
  };
};
export default userSlice.reducer;
