import React, { Fragment } from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Button from '@material-ui/core/Button'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import {Link } from 'react-router-dom'
import './body.css'
import FormDialog from './Dialog'

function Body({data,match,ParentState}) {
    console.log(match)
    const Boards=data.map(({id,name,prefs})=>{
        return <Link to={`/${match.path}/${id}`} key={id} style={{textDecoration:"none"}}><div  className="board1"
        style={
            {backgroundImage:(prefs.backgroundImage)?`url(${prefs.backgroundImage})`:'none',
            backgroundColor:prefs.backgroundColor
        }}>
        {name}
        
    </div>
    </Link>
    })
    const  handleSubmit = async (name1)=>{
         const res=await fetch('https://api.trello.com/1/boards?key=5c73e280ffee643ce764c6df16a719b5&token=374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2',{
            method : 'POST',
            headers: { 
            "Content-type": "application/json; charset=UTF-8"
            } ,
              body:JSON.stringify({name:name1})
            })
         const data=await res.json();
         ParentState(data.id)
         Boards.push(<h1 key="1234">new Board</h1>)
        }
        
    return (
        <div className="body" >
        {/* <AccessTimeOutlinedIcon size="small"/>
        <strong>Personal Boards</strong> */}
        {console.log("component rendered",Boards)}
        <div className="title">
        <PermIdentityOutlinedIcon size="small"/>
        <strong>Personal Boards</strong>
        </div>
        <div className="boards">
           <FormDialog title="Create New Board" submit={handleSubmit} label="Enter Board Name"></FormDialog>
           {Boards}
        </div>
        </div>
    )
}

export default Body
