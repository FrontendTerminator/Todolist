import { apiConfig } from "./api-config";
import {
  GetTasksResponse,
  ResponseType,
  TaskType,
  TodolistType,
  UpdateTaskModelType,
} from "./types";

export const todolistsAPI = {
  getTodolists() {
    const promise = apiConfig.get<TodolistType[]>("todo-lists");
    return promise;
  },
  createTodolist(title: string) {
    const promise = apiConfig.post<ResponseType<{ item: TodolistType }>>(
      "todo-lists",
      { title: title }
    );
    return promise;
  },
  deleteTodolist(id: string) {
    const promise = apiConfig.delete<ResponseType>(`todo-lists/${id}`);
    return promise;
  },
  updateTodolist(id: string, title: string) {
    const promise = apiConfig.put<ResponseType>(`todo-lists/${id}`, {
      title: title,
    });
    return promise;
  },
  getTasks(todolistId: string) {
    return apiConfig.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
  },
  deleteTask(todolistId: string, taskId: string) {
    return apiConfig.delete<ResponseType>(
      `todo-lists/${todolistId}/tasks/${taskId}`
    );
  },
  createTask(todolistId: string, taskTitile: string) {
    return apiConfig.post<ResponseType<{ item: TaskType }>>(
      `todo-lists/${todolistId}/tasks`,
      { title: taskTitile }
    );
  },
  updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    return apiConfig.put<ResponseType<TaskType>>(
      `todo-lists/${todolistId}/tasks/${taskId}`,
      model
    );
  },
};
