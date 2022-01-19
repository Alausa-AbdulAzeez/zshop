import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjM5MGJhYjA0MGI2N2JhYjIxOWQ5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjU5MDg2NiwiZXhwIjoxNjUxMjMwODY2fQ.WUTWSZJmv4hPxA_YRSeyJ6IufG-ugA7jMuTgzeLZbz0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
