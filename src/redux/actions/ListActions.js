import { ActionTypes } from "../constants/ActionTypes";

export const setList = (list) => {
  return {
    type: ActionTypes.SET_LIST,
    payload: list,
  };
};
