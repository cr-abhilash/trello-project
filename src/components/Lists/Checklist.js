import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormDialog from "../content/body/Dialog";
import { withStyles } from "@material-ui/core/styles";
import "./CheckList.css";
import CheckboxList from "./checkBox";
import {
  featchCheckList,
  CloseDialog,
} from "../../actionCreators/actionCreators";
import { connect } from "react-redux";

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
  handleClickOpen = () => {
    this.props.featchCheckList(this.props.checkId);
  };

  handleClose = () => {
    this.props.CloseDialog();
  };

  // check list items
  render() {
    console.log("component rendered");
    const { classes } = this.props;
    return (
      <Fragment>
        <Button className="card" onClick={this.handleClickOpen}>
          {this.props.cardName}
        </Button>
        <div className="dialog">
          <Dialog
            open={this.props.open}
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
              <CheckboxList
                checkData={
                  this.props.checkListData ? this.props.checkListData : []
                }
              ></CheckboxList>
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
const mapStateToProps = (state) => ({
  checkListData: state.checkList.checkListData,
  open: state.checkList.DialogState,
});
export default connect(mapStateToProps, { featchCheckList, CloseDialog })(
  withStyles(Styles)(CheckList)
);
