import React, { Component } from "react";
import SimpleList from "./Listitems";
import FormDialog from "../body/Dialog";
import { FEATCH_Lists, FEATCH_Cards } from "../actionCreators/actions";
import { fetchCardAll, fetchListAll } from "../actionCreators/actionCreators";
import { connect } from "react-redux";
class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchListAll(this.props.match.params.boardid);
    this.props.fetchCardAll(this.props.match.params.boardid);
  }

  // async componentDidMount() {
  //
  //   try {
  //     const res = await fetch(
  //       `https://api.trello.com/1/boards/${
  //         this.state.id
  //       }/lists?key=${localStorage.getItem("key")}&token=${localStorage.getItem(
  //         "token"
  //       )}`
  //     );
  //     if (!res.ok) {
  //       throw Error(res.statusText);
  //     }
  //     const dataList = await res.json();
  //     const res2 = await fetch(
  //       `https://api.trello.com/1/boards/${
  //         this.state.id
  //       }/cards?key=${localStorage.getItem("key")}&token=${localStorage.getItem(
  //         "token"
  //       )}`
  //     );
  //     if (!res2.ok) {
  //       throw Error(res2.statusText);
  //     }
  //     const dataCards = await res2.json();
  //     const data = dataList.map(({ id: listId, name: listName }) => {
  //       let temp1 = [];
  //       dataCards.map(
  //         ({ id: cardId, name: cardName, idChecklists, idList }) => {
  //           if (listId === idList) {
  //             let temp = {};
  //             temp["cardId"] = cardId;
  //             temp["cardName"] = cardName;
  //             temp["checkId"] = idChecklists[0] ? idChecklists[0] : 0;
  //             temp1.push(temp);
  //           }
  //         }
  //       );
  //       return (
  //         <SimpleList
  //           key={listId}
  //           url={this.props.match.url}
  //           cardData={temp1}
  //           listData={{ id: listId, name: listName }}
  //         />
  //       );
  //     });
  //     this.setState({
  //       lists: dataList,
  //       cards: dataCards,
  //       listData: data,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // handleSubmit = async (name1) => {
  //   try {
  //     const res = await fetch(
  //       `https://api.trello.com/1/boards/${
  //         this.state.id
  //       }/lists?key=${localStorage.getItem("key")}&token=${localStorage.getItem(
  //         "token"
  //       )}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //         body: JSON.stringify({ name: name1 }),
  //       }
  //     );
  //     if (res.ok) {
  //       const newdata = await res.json();
  //       let newData = (
  //         <SimpleList
  //           key={34}
  //           url={this.props.match.url}
  //           cardData={[]}
  //           listData={{ id: newdata.id, name: newdata.name }}
  //         />
  //       );
  //       this.setState({
  //         listData: [...this.state.listData, newData],
  //       });
  //     } else {
  //       throw Error(res.statusText);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  render() {
    return (
      <h1>lists</h1>
      // <div className="List">
      //   <div className="ListContainer">
      //     {this.state.listData}
      //     <FormDialog
      //       Stylename="ListStyle"
      //       title="Create New List"
      //       submit={this.handleSubmit}
      //       label="Enter List Name"
      //     ></FormDialog>
      //   </div>
      // </div>
    );
  }
}

const mapStatesToProp = (state) => ({
  dataLists: state.lists.Lists,
  dataCards: state.lists.Cards,
});
export default connect(mapStatesToProp, { fetchListAll, fetchCardAll })(List);
