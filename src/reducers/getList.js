import { Add_List, getListOfCards, Add_Card } from "../actionCreators/actions";
let initial_state = {
  ListOfCards: [],
  cards: [],
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
    case Add_Card:
      let list1 = state.ListOfCards;
      console.log("oldList", list1, "action", action);
      let newList = list1.map((data) => {
        if (data[0] == action.listId) {
          data[2].push(action.data);
        }
        return data;
      });
      console.log("newList", newList);
      return {
        ListOfCards: newList,
      };
    default:
      return state;
  }
};
