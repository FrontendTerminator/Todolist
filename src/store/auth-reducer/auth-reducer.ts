import { Dispatch } from "redux";
import { setAppStatusAC } from "../app-reducer/app-reducer";

import {
  handleServerAppError,
  handleServerNetworkError,
} from "../../utils/error-utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppRootStateType } from "../store";
import { LoginParams } from "../../api/types";
import { authAPI } from "../../api/login-api";

const initialState = {
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value;
    },
  },
});

export const authReducer = slice.reducer;
export const { setIsLoggedInAC } = slice.actions;

export const loginTC = (data: LoginParams) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC({ status: "loading" }));
  authAPI
    .login(data)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC({ value: true }));
        dispatch(setAppStatusAC({ status: "succeeded" }));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};

export const logoutTC = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC({ status: "loading" }));
  authAPI
    .logout()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC({ value: false }));
        dispatch(setAppStatusAC({ status: "succeeded" }));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};

export const authentificationSelector = (state: AppRootStateType) => {
  return state.auth.isLoggedIn;
};
