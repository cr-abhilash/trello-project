import React from "react";
import "./body.css";
import trello from "./trello1.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="body">
      <h1> Welcome to Trello! </h1>
      <img src={trello} alt="image not found" />
      <div className="HomeInfo">
        <p>
          You can organize just about anything with a Trello board.
          <br />
          Start by naming your board, something related to the project you are
          working on, or what you need to get done.
        </p>
      </div>
    </div>
  );
}

export default Home;
