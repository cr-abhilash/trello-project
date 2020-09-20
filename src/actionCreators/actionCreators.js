import {
  FEATCH_BOARDS,
  ADD_BOARD,
  FEATCH_Lists,
  ADD_Card,
  FEATCH_Cards,
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
      console.log(newdata);
      console.log(name1);
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

export const fetchListAll = (id) => async (dispatch) => {
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
    console.log(dataList);
    dispatch({
      type: FEATCH_Lists,
      listData: dataList,
    });
  } catch (e) {
    console.log(e);
  }
};
export const fetchCardAll = (id) => async (dispatch) => {
  try {
    const res2 = await fetch(
      `https://api.trello.com/1/boards/${id}/cards?key=${localStorage.getItem(
        "key"
      )}&token=${localStorage.getItem("token")}`
    );
    if (!res2.ok) {
      throw Error(res2.statusText);
    }
    const dataCards = await res2.json();
    console.log(dataCards);
    dispatch({
      type: FEATCH_Cards,
      cardData: dataCards,
    });
  } catch (e) {
    console.log(e);
  }
};
