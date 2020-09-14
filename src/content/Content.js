import React from 'react'

import Home from '../body/Home'
import {Route} from 'react-router-dom'
import SideBar2 from '../sidebar/sideBar2';
function Content() {
    return (
        <div className="content">
        <SideBar2></SideBar2>
        <Home></Home>
       
       </div>
    )
}

export default Content
