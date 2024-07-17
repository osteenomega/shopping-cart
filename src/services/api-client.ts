import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com",
});

export { CanceledError };
