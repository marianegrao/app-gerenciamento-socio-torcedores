import axios from "axios";
import { getLocalStorage } from "../utils/storage";

const api = axios.create({
  baseURL: "http://localhost:3100",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const token = getLocalStorage("token");

export const signIn = async (body) => {
  let response = {};
  try {
    const returnApi = await api.post("/signin", body);
    const { data } = returnApi;

    response = {
      userId: data.user.id,
      token: data.token,
      error: false,
    };
  } catch (error) {
    response = {
      message: error.response.data,
      error: true,
    };
  }
  return response;
};

export const signUp = async (body) => {
  let response = {};
  try {
    await api.post("/signup", body);

    response = {
      error: false,
    };
  } catch (error) {
    response = {
      message: error.response.data,
      error: true,
    };
  }
  return response;
};

export const detailUser = async () => {
  let response = {};
  try {
    const { data } = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    response = {
      ...data,
      error: false,
    };
  } catch (error) {
    response = {
      message: error.response.data,
      error: true,
    };
  }
  return response;
};
