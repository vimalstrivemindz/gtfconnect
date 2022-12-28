import axios from "axios";
export const baseUrlAuth = axios.create({
  baseURL:
    "https://da91-2409-4063-4c85-38cc-b77b-ff7e-fba1-ab33.in.ngrok.io/gettogether_temp/public/api/",
});
export const baseUrlMain = axios.create({
  baseURL:
    "https://da91-2409-4063-4c85-38cc-b77b-ff7e-fba1-ab33.in.ngrok.io/gtf_social/public/api/",
});
