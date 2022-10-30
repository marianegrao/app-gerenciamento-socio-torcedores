import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3100",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

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
