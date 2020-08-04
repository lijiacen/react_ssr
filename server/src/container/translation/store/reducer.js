import { CHANGE_TRAN_LIST } from "./constants";
const defaultState = {
  tranList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TRAN_LIST:
      return { ...state, tranList: action.value };
    default:
      return state;
  }
};
