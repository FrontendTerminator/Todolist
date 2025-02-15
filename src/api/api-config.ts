import axios from "axios";

export const apiConfig = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "e68751ec-99e4-4ba5-aeca-d3d2975884b0",
  },
});
