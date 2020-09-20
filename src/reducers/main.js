import { combineReducers } from "redux";
import getBoards from "./GetBoards";
export default combineReducers({
  boards: getBoards,
});
