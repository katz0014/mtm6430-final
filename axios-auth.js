import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googlepis.com/v1/"
});

export default instance;