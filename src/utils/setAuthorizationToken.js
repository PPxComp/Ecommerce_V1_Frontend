import axios from "axios";
export default function setAuthorizationToken(token) {
  // axios.defaults.withCredentials = true;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
