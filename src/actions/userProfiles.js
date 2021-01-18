import data from "../data/crypto.json";

import { USER_LOADED, AUTH_ERROR } from "./types";
// Load User
export const loadUser = () => (dispatch) => {
  try {
    const res = data;
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
