import { ContactsOutlined } from "@material-ui/icons";
import { FEATCH_BOARDS, ADD_BOARD } from "../actionCreators/actions";
let initial_state = {
  boards: [],
  loading: false,
};
export const getBoards = (state = initial_state, action) => {
  console.log("featching Data");
  console.log(state);
  switch (action.type) {
    case FEATCH_BOARDS:
      return {
        boards: action.boards,
      };
    case ADD_BOARD:
      return {
        boards: [...state.boards, action.board],
      };
    default:
      return state;
  }
};
