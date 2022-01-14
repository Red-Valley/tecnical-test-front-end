import axios from "axios";

// Create a new instance of axios to be used for the API calls
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default api;
