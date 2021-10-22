import { FETCH_USER_DATA, USER_LOGIN } from "./types";

const initialState = {
  data: [],
  login: "",
};

export const userDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, data: action.payload };
    case USER_LOGIN:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
