import { combineReducers } from "redux";
import { ListReducer } from "./ListReducer";

const reducers = combineReducers({
  allList: ListReducer
});

export default reducers;