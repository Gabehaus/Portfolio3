import {
  SHOW_LINKS,
  FADEOUT_LINKS,
  SHOW_PORT,
  FADEOUT_PORT,
  SHOW_ACCOUNTS
} from "./types";

export const showLinks = () => {
  return {
    type: SHOW_LINKS
  };
};

export const showPort = () => {
  return {
    type: SHOW_PORT
  };
};

export const showAccounts = () => {
  return {
    type: SHOW_ACCOUNTS
  };
};
