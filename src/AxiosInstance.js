import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.themoviedb.org/3"
});

export default AxiosInstance;
