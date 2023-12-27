import axios from "axios";

export default function useApi() {
  const api = axios.create({ baseURL: "http://localhost:8000/api" });
  return { api };
}
