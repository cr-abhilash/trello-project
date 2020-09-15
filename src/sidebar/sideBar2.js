import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
function SideBar2() {
    return (
       
            <ul className=".nav">
                <Link  className="Link" to="/">
                     <li><strong>HOME</strong></li>
                </Link>
                <Link  className="Link" to="/boards">
                  <li><strong>BOARDS</strong></li>
                </Link>
                <Link className="Link"><li><strong>TEMPLATES</strong></li></Link>
            </ul>
       
    )
}

export default SideBar2
