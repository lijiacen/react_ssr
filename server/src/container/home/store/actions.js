import { CHANGE_HOME_LIST } from "./constants";

const changeList = (value) => {
  return {
    type: CHANGE_HOME_LIST,
    value
  };
};

export const getHomeList = () => {
  //服务端和客户端请求不同处理
  let url = `/api/news.json`;

  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      if (res.data.success) {
        dispatch(changeList(res.data.data));
      }
    });
  };
};
