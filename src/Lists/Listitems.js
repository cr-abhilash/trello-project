import React from "react";
import FormDialog from "../body/Dialog";
import "./ListItem.css";
import CheckList from "./Checklist";

export default class SimpleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      cardData: [],
    };
  }
  componentDidMount() {
    this.setState({
      listData: this.props.listData,
      cardData: this.props.cardData,
    });
  }

  handleSubmit = async (name1) => {
    try {
      const res = await fetch(
        `https://api.trello.com/1/cards/?key=${localStorage.getItem(
          "key"
        )}&token=${localStorage.getItem("token")}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ idList: this.state.listData.id, name: name1 }),
        }
      );
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const newdata = await res.json();
      this.setState({
        cardData: [
          ...this.state.cardData,
          { cardName: newdata.name, cardId: newdata.id },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="root">
        <div className="header2">{this.state.listData.name}</div>
        <div className="cards">
          {this.state.cardData.map((data) => {
            console.log(data.checkId);
            return <CheckList {...data}></CheckList>;
          })}
        </div>
        <div className="footer">
          <FormDialog
            Stylename="cardButton"
            title="Create New Card"
            submit={this.handleSubmit}
            label="Enter Card Name"
          ></FormDialog>
        </div>
      </div>
    );
  }
}
