import React from "react";
import "./Header.css";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="div">
        <AppsOutlinedIcon fontSize="small" />
        <Link className="Link" to="/">
          <HomeOutlinedIcon fontSize="small" />
        </Link>
        <Link className="Link" to="/boards">
          Boards
        </Link>
        <SearchOutlinedIcon fontSize="small" />
      </div>
      <em className="title">Trello</em>
      <div className="div">
        <AddOutlinedIcon fontSize="small" />
        <InfoOutlinedIcon fontSize="small"></InfoOutlinedIcon>
        <NotificationsNoneOutlinedIcon fontSize="small" />
        <AccountCircleOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
}

export default Header;
