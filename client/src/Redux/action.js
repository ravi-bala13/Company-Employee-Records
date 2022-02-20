import { LOGIN_SUCCESS } from "./actionTypes";

export const loginSuccess = (token) => {
  console.log("token:", token);
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
