import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:44340/api/vehicle",
  headers: {
    "Content-type": "application/json"
  }
});