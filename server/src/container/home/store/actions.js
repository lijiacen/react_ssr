import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => {
  return {
    type: CHANGE_HOME_LIST,
    list
  };
};

export const getHomeList = () => {
  //服务端和客户端请求不同处理
  let url = "/api/news.json?secret=" + "PP87ANTIPIRATE";

  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      let list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
