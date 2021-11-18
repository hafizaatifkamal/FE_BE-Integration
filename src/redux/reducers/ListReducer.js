import { ActionTypes } from "../constants/ActionTypes";

const intialState = {
  list: [],
};

export const ListReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LIST:
      return { ...state, list: payload };
    default:
      return state;
  }
};
