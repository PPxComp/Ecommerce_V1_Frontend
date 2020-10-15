import axios from "axios";
export default function setAuthorizationToken(token) {
  if (token) {
    // axios.interceptors.request.use(function (config) {
    //   config.headers.Authorization = token;
    //   return config;
    // });
    axios.defaults.headers.common["Authorization"] = `30`;
    console.log("do");
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
