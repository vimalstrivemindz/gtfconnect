import { createSlice } from "@reduxjs/toolkit";
import { baseUrlAuth } from "../store/axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialUserState = {
  userRegister: [],
  selectCountry: [],
  userSelectState: [],
  userSelectCity: [],
  status: STATUSES.IDLE,
};

const userRegisterSlice = createSlice({
  name: "user",
  initialState: initialUserState,

  reducers: {
    fetchUserRegister(state, action) {
      state.userRegister = action.payload;
    },
    fetchUserData(state, action) {
      state.selectCountry = action.payload;
    },
    fetchSelectState(state, action) {
      state.userSelectState = action.payload;
    },
    fetchSelectCity(state, action) {
      state.userSelectCity = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {
  fetchUserRegister,
  fetchUserLogin,
  fetchUserData,
  fetchSelectState,
  fetchSelectCity,
  setStatus,
} = userRegisterSlice.actions;

// export const fetchUserRegisters = (payload) => {
//   let formdata = new FormData();
//   formdata.append("FirstName", payload?.registrationStep1?.firstName);
//   formdata.append("LastName", payload?.registrationStep1?.lastName);
//   formdata.append("Email", payload?.registrationStep1?.email);
//   formdata.append("Password", payload?.values?.password);
//   formdata.append("Phone", payload?.registrationStep1?.phoneNumber);
//   formdata.append("Gender", payload?.registrationStep1?.gender);
//   formdata.append("CountryID", payload?.registrationStep1?.countryCode);
//   formdata.append("StateID", 33);
//   formdata.append("CityID", 1);
//   formdata.append("Pincode", payload?.values?.pinNumber);
//   formdata.append("Address", payload?.values?.address);
//   formdata.append("DOB", payload?.registrationStep1?.dob);
//   formdata.append("find_us", "facebook");
//   formdata.append("IsReferral", 1);
//   return async (dispatch) => {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       await baseUrlAuth.post("registration", formdata).then((response) => {
//         dispatch(fetchUserRegister(response?.data));
//         dispatch(setStatus(STATUSES.IDLE));
//       });
//     } catch (error) {
//       console.log("error :", error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// };

export const fetchUserDatas = () => {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth
        .get("get_country")
        .then((res) => dispatch(fetchUserData(res?.data)));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
export const fetchSelectStates = (payload) => {
  console.log("payload", payload);
  const formData = new FormData();
  formData.append("CountryID", payload);
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth
        .post("get_state", formData)
        .then((res) => dispatch(fetchSelectState(res?.data)));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
export const fetchSelectCitys = (payload) => {
  console.log("payload", payload);
  const formData = new FormData();
  formData.append("StateID", payload);
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await baseUrlAuth
        .post("get_city", formData)
        .then((res) => dispatch(fetchSelectCity(res?.data)));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
export default userRegisterSlice.reducer;
