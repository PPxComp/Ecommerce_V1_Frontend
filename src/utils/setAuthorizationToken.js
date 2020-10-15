import axios from "axios";
export default function setAuthorizationToken(token) {
  // axios.defaults.withCredentials = true;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
    console.log("do");
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
