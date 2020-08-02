import axios from "axios";

import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => {
  return {
    type: CHANGE_HOME_LIST,
    list
  };
};

export const getHomeList = (server) => {
  //服务端和客户端请求不同处理
  let url = "";
  if (server) {
    url = "http://47.95.113.63/ssr/api/news.json?secret=" + "PP87ANTIPIRATE";
  } else {
    url = "/api/news.json?secret=" + "PP87ANTIPIRATE";
  }

  return (dispatch) => {
    return axios.get(url).then((res) => {
      let list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
