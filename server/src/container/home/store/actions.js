import { CHANGE_HOME_LIST } from "./constants";
import serverAxios from "../../../server/request";
import clientAxios from "../../../client/request";

const changeList = (list) => {
  return {
    type: CHANGE_HOME_LIST,
    list
  };
};

export const getHomeList = (server) => {
  //服务端和客户端请求不同处理
  let url = "/api/news.json?secret=" + "PP87ANTIPIRATE";
  let request = server ? serverAxios : clientAxios;

  return (dispatch) => {
    return request.get(url).then((res) => {
      let list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
