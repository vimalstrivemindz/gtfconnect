import axios from "axios";
export const baseUrlAuth = axios.create({
  baseURL:
    "https://1d8e-2405-204-a384-9223-53bc-51cb-9c16-9f89.in.ngrok.io/gettogether_temp/public/api/",
});
export const baseUrlMain = axios.create({
  baseURL:
    "https://1d8e-2405-204-a384-9223-53bc-51cb-9c16-9f89.in.ngrok.io/gtf_social/public/api/",
});
