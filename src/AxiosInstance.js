import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://api.themoviedb.org/3"
});

export default AxiosInstance;
