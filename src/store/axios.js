import axios from "axios";
// const token = localStorage.getItem("user_info");
// const authToken = token && JSON.parse(token).token;
export const baseUrl = axios.create({
  baseURL: "https://fakestoreapi.com/",
//   headers: {
//     Accept: "application/json",
//     Authorization: `Bearer ${authToken}`,
//   },
});
