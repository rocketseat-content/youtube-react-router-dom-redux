import { applyMiddleware, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(() => {}),
  applyMiddleware(...middlewares)
);

export default store;
