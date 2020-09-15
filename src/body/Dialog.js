import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({title,submit,label}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const handleSubmit = () => {
    setOpen(false);
    submit(name)
    
  };
  const handleChange =(e)=>{
      console.log(e.target.value)
      setName(e.target.value)
  }
  
  return (
    <div className="board1" style={{backgroundColor:"rgb(199, 192, 192) !important"}}>
      <Button  className="board1" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Board</DialogTitle>
        <DialogContent>
          <TextField onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
