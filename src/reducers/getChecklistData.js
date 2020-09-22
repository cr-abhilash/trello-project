import {
  getCheckList,
  DialogOpen,
  DialogClose,
} from "../actionCreators/actions";
let initial_state = {
  checkListData: [],
  DialogState: false,
};
export const getChecklistData = (state = initial_state, action) => {
  switch (action.type) {
    case getCheckList:
      return {
        checkListData: action.data,
        DialogState: true,
      };
    case DialogClose:
      return {
        DialogState: false,
      };
    default:
      return state;
  }
};
