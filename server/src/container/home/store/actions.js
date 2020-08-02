import axios from "axios";

import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => {
  return {
    type: CHANGE_HOME_LIST,
    list
  };
};

export const getHomeList = () => {
  return (dispatch) => {
    return axios
      .get("http://47.95.113.63/ssr/api/news.json?secret=" + "PP87ANTIPIRATE")
      .then((res) => {
        let list = res.data.data;
        dispatch(changeList(list));
      });
  };
};
