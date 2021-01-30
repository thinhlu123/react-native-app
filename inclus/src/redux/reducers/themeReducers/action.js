export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

export const toggleDarkTheme = () => ({
  type: DARK_THEME,
});

export const toggleLightTheme = () => ({
  type: LIGHT_THEME,
});

export const toggleTheme = (theme) => {
  return async dispatch => {
    if (theme === true) {
      dispatch(toggleDarkTheme());
    } else {
      dispatch(toggleLightTheme());
    }
  };
};
