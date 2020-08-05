import { CHANGE_TRAN_LIST } from "./constants";

const changeList = (value) => {
  return {
    type: CHANGE_TRAN_LIST,
    value
  };
};

export const getTranList = () => {
  let url = `/api/translations.json`;
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      let list = [];
      if (res.data.success) {
        list = res.data.data;
      }
      dispatch(changeList(list));
    });
  };
};
