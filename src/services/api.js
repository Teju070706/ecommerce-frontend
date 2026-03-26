import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-10e5.up.railway.app/api"
});

export default API;
