import { AppRootStateType } from "../store";

export const selectTodolists = (state: AppRootStateType) => {
  return state.todolists;
};
