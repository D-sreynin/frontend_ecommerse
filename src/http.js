import axios from "axios";

// Create axios instance with better defaults
const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://backendecommerse-production.up.railway.app"
      : "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export default http;
