import { getCheckList } from "../actionCreators/actions";
let initial_state = {
  checkListData: [],
};
export const getChecklistData = (state = initial_state, action) => {
  switch (action.type) {
    case getCheckList:
      return {
        checkListData: action.data,
      };

    default:
      return state;
  }
};
