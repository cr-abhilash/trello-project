import React, { Component } from "react";
import SimpleList from "./Listitems";
import FormDialog from "../body/Dialog";
import { DrawListsOfCards, Post_List } from "../actionCreators/actionCreators";
import { connect } from "react-redux";
class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("component mounted", this.props);
    this.props.DrawListsOfCards(this.props.match.params.boardid);
  }

  handleSubmit = (name1) => {
    console.log("Posting List");
    this.props.Post_List(name1, this.props.match.params.boardid);
  };

  render() {
    return (
      <div className="List">
        <div className="ListContainer">
          {this.props.ListOfCards.map((data) => {
            console.log("data", data);
            return (
              <SimpleList
                key={data[0]}
                url={this.props.match.url}
                cardData={data[2] ? data[2] : []}
                listData={{ id: data[0], name: data[1] }}
              />
            );
          })}
          <FormDialog
            Stylename="ListStyle"
            title="Create New List"
            submit={this.handleSubmit}
            label="Enter List Name"
          ></FormDialog>
        </div>
      </div>
    );
  }
}

const mapStatesToProp = (state) => ({
  ListOfCards: state.lists.ListOfCards,
});
export default connect(mapStatesToProp, {
  DrawListsOfCards,
  Post_List,
})(List);
