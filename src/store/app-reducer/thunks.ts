import { Dispatch } from "redux";

import { setIsLoggedInAC } from "../auth-reducer/auth-reducer";

import { authAPI } from "../../api/login-api";
import { setAppInitializedAC } from "./app-reducer";

export const initializeAppTC = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC({ value: true }));
    } else {
    }
    dispatch(setAppInitializedAC({ isInitialized: true }));
  });
};
