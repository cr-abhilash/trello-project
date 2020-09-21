import {
  FEATCH_BOARDS,
  ADD_BOARD,
  Add_Card,
  Add_List,
  getListOfCards,
} from "./actions";

export const featchBoardsAll = () => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.trello.com/1/members/me/boards?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`
    );
    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: FEATCH_BOARDS,
        boards: data,
      });
    } else {
      throw Error(res.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};

export const addNewBoard = (name1) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.trello.com/1/boards?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ name: name1 }),
      }
    );
    if (res.ok) {
      const newdata = await res.json();
      dispatch({
        type: ADD_BOARD,
        board: { name: newdata.name, id: newdata.id, prefs: newdata.prefs },
      });
    } else {
      throw Error(res.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};

export const DrawListsOfCards = (id) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.trello.com/1/boards/${id}/lists?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`
    );
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const dataList = await res.json();
    const res2 = await fetch(
      `https://api.trello.com/1/boards/${id}/cards?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`
    );
    if (!res2.ok) {
      throw Error(res2.statusText);
    }
    const dataCards = await res2.json();
    const content = dataList.map(({ id: listId, name: listName }) => {
      let temp1 = [listId, listName, []];
      dataCards.map(({ id: cardId, name: cardName, idChecklists, idList }) => {
        if (listId === idList) {
          let temp = {};
          // temp["listId"] = listId;
          // temp["listName"] = listName;
          temp["cardId"] = cardId;
          temp["cardName"] = cardName;
          temp["checkId"] = idChecklists[0] ? idChecklists[0] : 0;
          temp1[2].push(temp);
        }
      });
      return temp1;
    });
    dispatch({
      type: getListOfCards,
      data: content,
    });
  } catch (e) {
    console.log(e);
  }
};

export const Post_List = (name1, id) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.trello.com/1/boards/${id}/lists?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ name: name1 }),
      }
    );
    if (res.ok) {
      const newData = await res.json();
      let newList = [newData.id, newData.name, []];
      dispatch({
        type: Add_List,
        newList: newList,
      });
    } else {
      throw Error(res.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};

export const Post_Card = (name1, listId) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/cards/?key=${localStorage.getItem(
      "key"
    )}&token=${localStorage.getItem("token")}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ idList: listId, name: name1 }),
    }
  )
    .then((res) => res.json())
    .then((newdata) => {
      dispatch({
        type: Add_Card,
        data: { cardName: newdata.name, cardId: newdata.id },
        listId: listId,
      });
    });
};
