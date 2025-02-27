import { tasksReducer } from "./tasks-reducer/tasks-reducer";
import { todolistsReducer } from "./todolist-reducer/todolists-reducer";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "../store/app-reducer/app-reducer";
import { authReducer } from "./auth-reducer/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
  app: appReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
