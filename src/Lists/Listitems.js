import React from 'react';
import FormDialog from '../body/Dialog';
import Button from '@material-ui/core/Button'
import CardList from './Card'
import './ListItem.css'


const handleSubmit=()=>{

}


export default function SimpleList({cardData,listData}) {
 
  return (
    <div className="root">
        <div className="header2">
           {listData.name}
        </div>
        <div className="cards">
             {cardData.map((data)=>{
                return <CardList CardData={data}/>
            })} 
        </div>
        <div className="footer">
        <FormDialog Stylename="cardButton" title="Create New Card" submit={handleSubmit} label="Enter Card Name"></FormDialog>
        </div>  
    </div>
  );
}