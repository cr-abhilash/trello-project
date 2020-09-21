import { combineReducers } from "redux";

import { getBoards } from "./getBoards";
import { getLists } from "./getList";
import { getChecklistData } from "./getChecklistData";

export default combineReducers({
  boards: getBoards,
  lists: getLists,
  checkList: getChecklistData,
});
