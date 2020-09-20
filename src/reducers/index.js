import { combineReducers } from "redux";
import { getBoards } from "./getBoards";
import { getLists } from "./getList";

export default combineReducers({
  boards: getBoards,
  lists: getLists,
});
