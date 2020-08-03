import { CHANGE_LOGIN, DO_LOGIN, DO_LOGOUT } from "./constants";
const defaultState = {
  isLogin: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return { ...state, isLogin: action.value };
    case DO_LOGIN:
      return { ...state, isLogin: action.value };
    case DO_LOGOUT:
      return { ...state, isLogin: action.value };
    default:
      return state;
  }
};
