import { secret } from "../../../util/util";
import { CHANGE_LOGIN, DO_LOGIN, DO_LOGOUT } from "./constants";

const changeLogin = (value) => {
  return {
    type: CHANGE_LOGIN,
    value
  };
};

export const getHeaderInfo = () => {
  let url = `/api/isLogin.json?${secret}`;
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      if (res.data.success) {
        dispatch(changeLogin(res.data.data.login));
      }
    });
  };
};

const doLogin = (value) => {
  return {
    type: DO_LOGIN,
    value
  };
};

export const login = () => {
  let url = `/api/login.json?${secret}`;
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      if (res.data.success) {
        dispatch(doLogin(true));
      }
    });
  };
};

const doLogout = (value) => {
  return {
    type: DO_LOGOUT,
    value
  };
};

export const logout = () => {
  let url = `/api/logout.json?${secret}`;
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(url).then((res) => {
      dispatch(doLogout(false));
    });
  };
};
