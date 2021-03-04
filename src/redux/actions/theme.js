import * as t from "../types/theme";

export const setThemeAction = (theme) => {
  return {
    type: t.SET_THEME,
    payload: theme,
  };
};
