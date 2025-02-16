import { apiConfig } from "./api-config";

import { LoginParams, ResponseType } from "./types";

export const authAPI = {
  login(data: LoginParams) {
    const promise = apiConfig.post<ResponseType<{ userId?: number }>>(
      "auth/login",
      data
    );
    return promise;
  },
  logout() {
    const promise =
      apiConfig.delete<ResponseType<{ userId?: number }>>("auth/login");
    return promise;
  },
  me() {
    const promise =
      apiConfig.get<ResponseType<{ id: number; email: string; login: string }>>(
        "auth/me"
      );
    return promise;
  },
};
