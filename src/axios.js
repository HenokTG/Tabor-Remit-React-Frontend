import axios from "axios";

// const baseURL = "http://127.0.0.1:8000/";
const baseURL = "https://tabor-remit-backend.herokuapp.com/";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

