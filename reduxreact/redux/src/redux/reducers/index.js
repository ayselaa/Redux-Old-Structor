import {ADD_NAME_TO_STORE, WRITE_MY_NAME} from "../types/index.js";

const initialState = "Chanel";

export const nameReducer = (name = initialState, action) => {
  switch (action.type) {
    case "WRITE_MY_NAME":
      return action.payload;
    case "ADD_NAME_TO_STORE":
      return name += `  ${action.payload}`

    default:
      return name;
  }
};
