import React from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import "./body.css";
import FormDialog from "./Dialog";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardData: [],
    };
  }
  NavigateList = (event) => {
    let id = event.target.getAttribute("value");
    this.props.history.push(`/boards/${id}`);
  };
  async componentDidMount() {
    console.log("component renderd");
    try {
      const res = await fetch(
        `https://api.trello.com/1/members/me/boards?key=${localStorage.getItem(
          "key"
        )}&token=${localStorage.getItem("token")}`
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({
          boardData: [...data],
        });
      } else {
        throw Error(res.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  }
  handleSubmit = async (name1) => {
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
        this.setState({
          boardData: [
            ...this.state.boardData,
            { name: newdata.name, id: newdata.id, prefs: newdata.prefs },
          ],
        });
      } else {
        throw Error(res.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="body">
        <div className="title">
          <PermIdentityOutlinedIcon size="small" />
          <strong>Personal Boards</strong>
        </div>
        <div className="boards">
          <FormDialog
            Stylename="board1 Button"
            title="Create New Board"
            submit={this.handleSubmit}
            label="Enter Board Name"
          ></FormDialog>
          {this.state.boardData.map(({ id, name, prefs }) => {
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

export default Body;
