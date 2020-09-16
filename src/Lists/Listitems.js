import React from 'react';
import FormDialog from '../body/Dialog';
import Button from '@material-ui/core/Button'

import './ListItem.css'
import {Link} from 'react-router-dom'
import CheckList from './Checklist'

const handleSubmit=()=>{

}


export default function SimpleList({cardData,listData,url}) {
 
  return (
    <div className="root">
        <div className="header2">
           {listData.name}
        </div>
        <div className="cards">
             {cardData.map((data)=>{
                console.log(data.checkId)
                return (<CheckList {...data}></CheckList>)
            })} 
        </div>
        <div className="footer">
        <FormDialog Stylename="cardButton" title="Create New Card" submit={handleSubmit} label="Enter Card Name"></FormDialog>
        </div>  
    </div>
  );
}