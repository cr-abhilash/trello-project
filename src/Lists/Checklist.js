import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormDialog from "../body/Dialog";
import { withStyles } from "@material-ui/core/styles";
import "./CheckList.css";
import CheckboxList from "./checkBox";

const Styles = {
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },
  dialogContent: {
    minHeight: "50vh",
    maxHeight: "50vh",
  },
};
class CheckList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2",
      key: "5c73e280ffee643ce764c6df16a719b5",
      open: false,
      id: this.props.checkId,
      data: [],
    };
  }

  async componentDidMount() {
    console.log("component mounted");
    try {
      if (this.props.checkId !== 0 && this.state.id) {
        fetch(
          `https://api.trello.com/1/checklist/${this.state.id}?key=${this.state.key}&token=${this.state.token}`
        )
          .then((res) => {
            if (!res.ok) {
              throw Error(res.statusText);
            }
            return res.json();
          })
          .then((data1) => {
            this.setState({
              data: data1.checkItems,
            });
          });
      }
    } catch (e) {
      console.log(e);
    }
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleSubmit = () => {
    this.setState({
      open: false,
    });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      open: true,
    });
  };
  // check list items
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button className="card" onClick={this.handleClickOpen}>
          {this.props.cardName}
        </Button>
        <div className="dialog">
          <Dialog
            open={this.state.open}
            classes={{ paper: classes.dialogPaper }}
            onClose={this.handleClose}
            height={500}
            maxWidth="sm"
            fullWidth="true"
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              {this.props.cardName}
            </DialogTitle>
            <FormDialog></FormDialog>
            <DialogContent
              classes={{ paper: classes.dialogContent }}
              className="DialogContent"
            >
              <CheckboxList checkData={this.state.data}></CheckboxList>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" onClick={this.handleClose}>
                submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(Styles)(CheckList);
