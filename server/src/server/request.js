import axios from "axios";
import util from "../util";

const serverAxios = (req) => {
  return axios.create({
    baseURL: "http://47.95.113.63/ssr",
    headers: {
      cookie: req.get("cookie") || ""
    },
    params: {
      secret: util.secret
    }
  });
};
export default serverAxios;
