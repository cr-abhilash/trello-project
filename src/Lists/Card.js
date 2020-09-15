import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:"265px ",
    backgroundColor: "#F4F5F7",
    height:"75px ",
    margin:5,
    color:"black",
    padding:"0px !important"
    
  },
  title:{
      fontSize:16
  },
  content:{
      padding:"3px !important",
      fontWeight:"bold"
  }
});

export default function CardList({CardData}) {
 
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
         <CardContent className={classes.content}>
          <Typography className={classes.title}>
           {CardData.cardName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"></Button>
      </CardActions>
    </Card>
  );
}
