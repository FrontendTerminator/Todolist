import { AppRootStateType } from "../store";

export const selectIsLoggedIn = (state: AppRootStateType) => {
  return state.auth.isLoggedIn;
};
