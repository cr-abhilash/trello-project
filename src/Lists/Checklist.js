import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormDialog from '../body/Dialog'
import { TramRounded } from '@material-ui/icons';
import './CheckList.css'
import CheckboxList from './checkBox'


export default class CheckList extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       token:"374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2",
       key:"5c73e280ffee643ce764c6df16a719b5",
       open:false,
       id:this.props.checkId,
       data:[],
       
      }
  }
  async componentDidMount(){
     console.log("component mounted")
     if(this.props.checkId!=0 && this.state.id){
     const res= fetch(`https://api.trello.com/1/checklist/${this.state.id}?key=${this.state.key}&token=${this.state.token}`)
    .then((res)=>res.json()).then((data1)=>{
      this.setState({
        data:data1.checkItems
      },()=>console.log("state data",this.state.data))
   
  })
}
}
  handleClickOpen = () => {
    this.setState({
      open:true
    })
  };
  

   handleClose = () => {
    this.setState({
      open:false
    })
    
  };
   handleSubmit = () => {
    this.setState({
      open:false
    })
  };
  handleChange =(e)=>{
      console.log(e.target.value)
      this.setState({
        open:true
      })
  }
// check list items
render(){
  console.log("rendering")
  return (
    <Fragment>
       <Button  className="card" onClick={this.handleClickOpen}>
       {this.props.cardName}
      </Button>
      <Dialog className="Dialog" open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{this.props.cardName}</DialogTitle>
        <FormDialog></FormDialog>
        <DialogContent>
          <CheckboxList checkData={this.state.data}></CheckboxList>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button  color="primary">
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
  }
}

