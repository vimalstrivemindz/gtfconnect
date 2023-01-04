import axios from "axios";
export const baseUrlAuth = axios.create({
  baseURL: "https://demo.strivemindz.com/gettogether/public/api/",
});
export const baseUrlMain = axios.create({
  baseURL: "https://gtf-connect.strivemindz.com/api/",
});
