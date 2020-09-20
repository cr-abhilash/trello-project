import { combineReducers } from "redux";
import { getBoards } from "./getBoards";

export default combineReducers({
  boards: getBoards,
});
