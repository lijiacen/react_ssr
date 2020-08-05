import axios from "axios";
import util from "../util";

const instance = axios.create({
  baseURL: "/",
  params: {
    secret: util.secret
  }
});

export default instance;
