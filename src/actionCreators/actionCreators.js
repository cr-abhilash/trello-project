import { FEATCH_BOARDS } from "./actions";

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
