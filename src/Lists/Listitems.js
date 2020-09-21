import React from "react";
import FormDialog from "../body/Dialog";
import "./ListItem.css";
import CheckList from "./Checklist";
import { Post_Card } from "../actionCreators/actionCreators";
import { connect } from "react-redux";
class SimpleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      cardData: [],
    };
  }
  componentDidMount() {
    console.log("list and card data", this.props.listData, this.props.cardData);
    this.setState({
      cardData: this.props.cardData,
      listData: this.props.listData,
    });
    // this.props.Post_Card(this.props.cardData);
  }

  handleSubmit = async (name1, listId) => {
    this.props.Post_Card(name1, listId);
    //   console.log("event", name1, listId);
    //   try {
    //     const res = await fetch(
    //       `https://api.trello.com/1/cards/?key=${localStorage.getItem(
    //         "key"
    //       )}&token=${localStorage.getItem("token")}`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8",
    //         },
    //         body: JSON.stringify({ idList: this.state.listData.id, name: name1 }),
    //       }
    //     );
    //     if (!res.ok) {
    //       throw Error(res.statusText);
    //     }
    //     const newdata = await res.json();
    //     this.props.Post_Card(name1, listId);
    //     // this.setState(
    //     //   {
    //     //     cardData: [
    //     //       ...this.state.cardData,
    //     //       { cardName: newdata.name, cardId: newdata.id },
    //     //     ],
    //     //   },
    //     //   () => {
    //     //     console.log("new card", this.state.cardData);
    //     //     console.log("list", this.state.listData);
    //     //   }
    //     // );
    //   } catch (e) {
    //     console.log(e);
    //   }
  };
  render() {
    return (
      <div className="root">
        <div className="header2">{this.props.listData.name}</div>
        <div className="cards">
          {this.state.cardData.map((data) => {
            return <CheckList key={data.id} {...data}></CheckList>;
          })}
        </div>
        <div className="footer">
          <FormDialog
            Stylename="cardButton"
            title="Create New Card"
            submit={this.handleSubmit}
            listId={this.props.listData.id}
            label="Enter Card Name"
          ></FormDialog>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => ({
  card: state.lists.ListOfCards,
});
export default connect(mapStateToProp, { Post_Card })(SimpleList);
