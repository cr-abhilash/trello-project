import React from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import "./body.css";
import FormDialog from "./Dialog";
import { connect } from "react-redux";
import { featchBoardsAll } from "../actionCreators/actionCreators";
class Body extends React.Component {
  componentDidMount() {
    console.log("component mounted");
    this.props.featchBoardsAll();
  }
  // NavigateList = (event) => {
  //   let id = event.target.getAttribute("value");
  //   this.props.history.push(`/boards/${id}`);
  // };
  //
  //
  // handleSubmit = async (name1) => {
  //   try {
  //     const res = await fetch(
  //       `https://api.trello.com/1/boards?key=${localStorage.getItem(
  //         "key"
  //       )}&token=${localStorage.getItem("token")}`,
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
  //       this.setState({
  //         boardData: [
  //           ...this.state.boardData,
  //           { name: newdata.name, id: newdata.id, prefs: newdata.prefs },
  //         ],
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
      <div className="body">
        Body
        <div className="title">
          <PermIdentityOutlinedIcon size="small" />
          <strong>Personal Boards</strong>
        </div>
        <div className="boards">
          <FormDialog
            Stylename="board1 Button"
            title="Create New Board"
            // submit={this.handleSubmit}
            label="Enter Board Name"
          ></FormDialog>
          {this.props.boards.map(({ id, name, prefs }) => {
            return (
              <div
                onClick={this.NavigateList}
                value={id}
                key={id}
                className="board1"
                style={{
                  backgroundImage: prefs.backgroundImage
                    ? `url(${prefs.backgroundImage})`
                    : "none",
                  backgroundColor: prefs.backgroundColor,
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  boards: state.boards.boards,
});
export default connect(mapStateToProps, { featchBoardsAll })(Body);
