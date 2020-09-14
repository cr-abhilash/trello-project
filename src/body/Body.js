import React, { Fragment } from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import {Link } from 'react-router-dom'
import './body.css'
function Body({data,match}) {
    console.log(match)
    const Boards=data.map(({id,name,prefs})=>{
        return <Link to={`/${match.Path}/`}><div key={id} className="board1"
        style={
            {backgroundImage:(prefs.backgroundImage)?`url(${prefs.backgroundImage})`:'none',
            backgroundColor:prefs.backgroundColor
        }}>
        {name}
    </div>
    </Link>
    })
    return (
        <div className="body" >
        {/* <AccessTimeOutlinedIcon size="small"/>
        <strong>Personal Boards</strong> */}
        <div className="title">
        <PermIdentityOutlinedIcon size="small"/>
        <strong>Personal Boards</strong>
        </div>
        <div className="boards">
           {Boards}
           <a><div className="board1 newBoard">
               Create new board 
           </div></a>
        </div>
        </div>
    )
}

export default Body
