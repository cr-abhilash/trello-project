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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function CheckboxList({checkList,name}) {
  const [checked, setChecked] = React.useState([0]);
  const [list, setList] = React.useState([]);
  const [id1, setId]= React.useState(0)
 let listArray=[]
 for(let i in checkList[0]){
    listArray.push(checkList[0][i])
 }
 setList([...listArray])
  const classes = useStyles();
  const handleSubmit=(name1)=>{
    listArray.push({name:name1,id:id1+1})
    setList([...listArray])
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
     <div>
    <List className={classes.root}>
      { 
       list.map((value)=>{
        const labelId = `checkbox-list-label-${value.id}`;
        console.log("data",value)
        return (
          <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value.id) !== -1}
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
    <FormDialog Stylename="checkList" title="Create New CheckList" submit={handleSubmit} label="Enter the task"></FormDialog>
    </div>
  );
}
