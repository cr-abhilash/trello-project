import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
function SideBar2() {
    return (
       
            <ul className="">
                <Link  
                  activeStyle={{ backgroundColor: 'rgb(220, 241, 247)',
                  color: 'rgb(61, 179, 209)'}} 
                  className="Link" to="/">
                     <li><strong>HOME</strong></li>
                </Link>
                <Link  
                  activeStyle={{ backgroundColor: 'rgb(220, 241, 247)',
                  color: 'rgb(61, 179, 209)'}}
                  className="Link" to="/Boards">
                  <li><strong>BOARDS</strong></li>
                </Link>
                <Link className="Link"><li><strong>TEMPLATES</strong></li></Link>
            </ul>
       
    )
}

export default SideBar2
