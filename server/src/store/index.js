import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as homeReducer } from "../container/home/store";
import { reducer as headerReducer } from "../components/header/store";
import serverAxios from "../server/request";
import clientAxios from "../client/request";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
});
//使用thunk.withExtraArgument 传递不同 axios实例给 redux-thunk,从而服务端，客户端调用不同axios instance 请求
export const getStore = (req) => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
  );
};
export const getClientStore = (defaultState) => {
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
