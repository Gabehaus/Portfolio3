import {
  SHOW_LINKS,
  FADEOUT_LINKS,
  SHOW_PORT,
  FADEOUT_PORT,
  SHOW_ACCOUNTS
} from "../actions/types";

const initialState = {
  showLinks: true,
  showPort: false,
  showAccounts: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LINKS:
      return {
        ...state,
        showLinks: !state.showLinks
      };
    case SHOW_PORT:
      return {
        ...state,
        showPort: !state.showPort
      };
    case SHOW_ACCOUNTS:
      return {
        ...state,
        showAccounts: !state.showAccounts
      };

    default:
      return state;
  }
}
