import * as t from "../types/theme";
import { loadState } from "../localStorage";
import systemTheme from "../../helpers/detectSystemTheme";

const persistedState = loadState();

const initialState = persistedState?.theme ?? systemTheme();

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
