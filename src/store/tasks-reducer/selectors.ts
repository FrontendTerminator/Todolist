import { AppRootStateType } from "../store";

export const selectTasks = (state: AppRootStateType) => {
  return state.tasks;
};
