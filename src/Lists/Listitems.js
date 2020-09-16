import React from 'react';
import FormDialog from '../body/Dialog';
import Button from '@material-ui/core/Button'

import './ListItem.css'
import {Link} from 'react-router-dom'
import CheckList from './Checklist'




export default class SimpleList extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       listData:[],
       cardData:[]
    }
  }
  componentDidMount(){
    this.setState({
      listData:this.props.listData,
      cardData:this.props.cardData
    })
  }
   
   handleSubmit=async (name1)=>{
    const res=await fetch(`https://api.trello.com/1/cards/?key=5c73e280ffee643ce764c6df16a719b5&token=374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2`,{
      method : 'POST',
      headers: { 
      "Content-type": "application/json; charset=UTF-8"
      } ,
        body:JSON.stringify({idList:this.state.listData.id,name:name1})
      })
      const newdata=await res.json();
      this.setState({
        cardData:[...this.state.cardData,{cardName:newdata.name,cardId:newdata.id}]
      })
  }
  render(){
  return (
    <div className="root">
        <div className="header2">
           {this.state.listData.name}
        </div>
        <div className="cards">
             {this.state.cardData.map((data)=>{
                console.log(data.checkId)
                return (<CheckList {...data}></CheckList>)
            })} 
        </div>
        <div className="footer">
        <FormDialog Stylename="cardButton" title="Create New Card" submit={this.handleSubmit} label="Enter Card Name"></FormDialog>
        </div>  
    </div>
  );
}
}
