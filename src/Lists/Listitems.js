import React from 'react';

import Button from '@material-ui/core/Button'
import CardList from './Card'
import './ListItem.css'





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
           <Button className="cardButton">
             Add another Card
           </Button>
        </div>
            
    </div>
  );
}