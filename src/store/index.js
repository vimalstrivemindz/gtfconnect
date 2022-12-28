import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import user from "../reducer/user";
import userLogin from "../reducer/userAuth/userLogin";
import OtpEmail from "../reducer/userAuth/OtpEmail";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, user,userLogin,OtpEmail);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
