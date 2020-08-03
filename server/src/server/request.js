import axios from "axios";

const serverAxios = (req) => {
  return axios.create({
    baseURL: "http://47.95.113.63/ssr",
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
};
export default serverAxios;
