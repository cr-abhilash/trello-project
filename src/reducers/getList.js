import { Add_List, getListOfCards } from "../actionCreators/actions";
let initial_state = {
  ListOfCards: [],
  loading: false,
  ListsFeatched: false,
  CardsFeatched: false,
};
export const getLists = (state = initial_state, action) => {
  console.log("featching Data");
  switch (action.type) {
    case getListOfCards:
      return {
        ListOfCards: action.data,
      };
    case Add_List:
      let list = state.ListOfCards;
      return {
        ListOfCards: [...list, action.newList],
      };
    default:
      return state;
  }
};
