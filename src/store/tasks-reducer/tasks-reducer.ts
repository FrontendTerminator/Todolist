import {
  addTodolistAC,
  removeTodolistAC,
  setTodolistsAC,
} from "../todolist-reducer/todolists-reducer";
import { setAppStatusAC } from "../app-reducer/app-reducer";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todolistsAPI } from "../../api/todolists-api";
import { TaskPriorities, TaskStatuses, TaskType } from "../../api/types";

const initialState: TasksStateType = {};

export const fetchTasksTC = createAsyncThunk(
  "tasks/fetchTasksTC",
  (todolistId: string, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({ status: "loading" }));

    return todolistsAPI.getTasks(todolistId).then((res) => {
      const tasks = res.data.items;
      thunkAPI.dispatch(setAppStatusAC({ status: "succeeded" }));

      return { tasks, todolistId };
    });
  }
);

const slice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    removeTaskAC(
      state,
      action: PayloadAction<{ taskId: string; todolistId: string }>
    ) {
      const tasks = state[action.payload.todolistId];
      const index = tasks.findIndex((t) => t.id === action.payload.taskId);
      if (index > -1) tasks.splice(index, 1);
    },
    addTaskAC(state, action: PayloadAction<{ task: TaskType }>) {
      state[action.payload.task.todoListId].unshift(action.payload.task);
    },
    updateTaskAC(
      state,
      action: PayloadAction<{
        taskId: string;
        model: UpdateDomainTaskModelType;
        todolistId: string;
      }>
    ) {
      const tasks = state[action.payload.todolistId];
      const index = tasks.findIndex((t) => t.id === action.payload.taskId);
      if (index > -1)
        tasks[index] = { ...tasks[index], ...action.payload.model };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodolistAC, (state, action) => {
      state[action.payload.todolist.id] = [];
    });
    builder.addCase(removeTodolistAC, (state, action) => {
      delete state[action.payload.id];
    });
    builder.addCase(setTodolistsAC, (state, action) => {
      action.payload.todolists.forEach((tl: any) => {
        state[tl.id] = [];
      });
    });
    builder.addCase(fetchTasksTC.fulfilled, (state, action) => {
      state[action.payload.todolistId] = action.payload.tasks;
    });
  },
});

export const tasksReducer = slice.reducer;

export const { removeTaskAC, addTaskAC, updateTaskAC } = slice.actions;

export type UpdateDomainTaskModelType = {
  title?: string;
  description?: string;
  status?: TaskStatuses;
  priority?: TaskPriorities;
  startDate?: string;
  deadline?: string;
};

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};
