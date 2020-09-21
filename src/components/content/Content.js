import React from "react";
import Body from "./body/Body";
import Home from "./body/Home";
import { Route } from "react-router-dom";
import SideBar2 from "./sidebar/sideBar2";
function Content(prop) {
  return (
    <div className="content">
      <SideBar2></SideBar2>
      <Route exact path="/" component={Home}></Route>
      <Route
        path="/boards"
        component={(props) => <Body {...props} data={prop.boards} />}
      />
    </div>
  );
}

export default Content;
