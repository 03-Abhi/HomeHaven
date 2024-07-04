import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://homehaven-backend-na40.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
