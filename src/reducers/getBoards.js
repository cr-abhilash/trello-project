import { ContactsOutlined } from "@material-ui/icons";
import { FEATCH_BOARDS } from "../actionCreators/actions";
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
    default:
      return state;
  }
};
