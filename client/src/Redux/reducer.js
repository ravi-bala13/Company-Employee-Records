import { LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: false,
  token: "notSet",
};

export const authReducer = (state = initState, { type, payload }) => {
  console.log("state:", state);
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};
