import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FormDialog from "../content/body/Dialog";

export default class CheckboxList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [0],
      list1: [],
      id1: 1,
    };
  }
  componentDidMount() {
    console.log("coponent mount");

    this.setState({
      list1: this.props.checkData,
    });
  }

  handleSubmit = (name1) => {
    this.props.checkData.push({ name: name1, id: this.state.id1 });

    this.setState({
      list1: this.state.checkData,
      id1: this.state.id1 + 1,
    });
  };

  handleToggle = (value) => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
  };
  render() {
    return (
      <div>
        <List style={{ width: "100%", maxWidth: 360, backgroundColor: "grey" }}>
          {this.props.checkData.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
              <ListItem
                key={value.id}
                role={undefined}
                dense
                button
                onClick={this.handleToggle(value.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={this.state.checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={value.id} primary={value.name} />
              </ListItem>
            );
          })}
        </List>
        <FormDialog
          Stylename="checkList"
          title="Create New CheckList"
          submit={this.handleSubmit}
          label="Enter the name"
        ></FormDialog>
      </div>
    );
  }
}
