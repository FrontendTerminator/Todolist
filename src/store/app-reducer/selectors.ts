import { AppRootStateType } from "../store";

export const selectIsInitialized = (state: AppRootStateType) => {
  return state.app.isInitialized;
};

export const selectStatus = (state: AppRootStateType) => {
  return state.app.status;
};

export const selectErrod = (state: AppRootStateType) => {
  return state.app.error;
};
