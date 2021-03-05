import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { saveState } from "./localStorage";
import tweetReducer from "./reducers/tweet";
import themeReducer from "./reducers/theme";
import throttle from "lodash.throttle";
import setThemeAttribute from "../utilities/setThemeAttribute";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    const { logger } = require("redux-logger");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  tweet: tweetReducer,
  theme: themeReducer,
});

const store = createStore(
  combinedReducer,
  bindMiddleware([thunkMiddleware, promiseMiddleware])
);

store.subscribe(
  throttle(() => {
    saveState({
      tweet: store.getState().tweet,
      theme: store.getState().theme,
    });
    setThemeAttribute(store.getState().theme);
  }, 1000)
);

export default store;
