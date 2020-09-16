import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Button } from '@material-ui/core';
import FormDialog from '../body/Dialog'
import { SentimentSatisfied } from '@material-ui/icons';

export default class CheckboxList extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checked:[0],
       list1:[],
       id1:0
    }
  }
  componentDidMount(){
    console.log("coponent mount")
    this.setState({
      list1:this.props.checkData
    },()=>console.log("state checkbox",this.state.list1))
  }
  
  handleSubmit=(name1)=>{
    this.props.checkData.push({name:name1,id:this.state.id1})
    console.log("check data",this.props.data)
    this.setState({
      list1:this.state.checkData,
      id1:this.state.id1+1
    })
  }
  

  handleToggle = (value) => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked:newChecked
    })
  };
 render(){
  return (
  
     <div>
      
     <List style={{ width: '100%',maxWidth: 360,backgroundColor: "grey"}} >
      {
       this.props.checkData.map((value)=>{
        const labelId = `checkbox-list-label-${value.id}`;
        console.log("data",value)
        return (
          <ListItem key={value.id} role={undefined} dense button onClick={this.handleToggle(value.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={this.state.checked.indexOf(value.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={value.id} primary={value.name} />
           
          </ListItem> 
         );
      })}
     
    </List> 
    <FormDialog Stylename="checkList" title="Create New CheckList" submit={this.handleSubmit} label="Enter the task"></FormDialog>
    </div>
  );
  }
}
