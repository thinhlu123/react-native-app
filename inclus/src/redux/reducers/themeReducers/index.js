import { DARK_THEME, LIGHT_THEME } from "./action";

const initialState = {
  theme: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return state;
  }
}
