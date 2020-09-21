import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
function SideBar2(props) {
  // const handleClick = () => {
  //   props.featchBoardsAll();
  // };
  return (
    <ul className=".nav">
      <Link className="Link" to="/">
        <li>
          <strong>HOME</strong>
        </li>
      </Link>
      <Link className="Link" to="/boards">
        <li>
          <strong>BOARDS</strong>
        </li>
      </Link>
      <Link className="Link" to="#">
        <li>
          <strong>TEMPLATES</strong>
        </li>
      </Link>
    </ul>
  );
}
const mapStateToProp = (state) => ({
  boards: state.boards.boards,
});
export default SideBar2;
