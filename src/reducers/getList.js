import {
  FEATCH_Cards,
  ADD_List,
  FEATCH_Lists,
} from "../actionCreators/actions";
let initial_state = {
  Lists: [],
  Cards: [],
  loading: false,
};
export const getLists = (state = initial_state, action) => {
  console.log("featching Data");
  console.log(state);
  switch (action.type) {
    case FEATCH_Lists:
      return {
        Lists: action.listData,
      };
    case FEATCH_Cards:
      return {
        Cards: action.cardData,
      };
    // case ADD_List:
    //   return {
    //     Lists:[...Lists,actio]
    //   };
    default:
      return state;
  }
};
