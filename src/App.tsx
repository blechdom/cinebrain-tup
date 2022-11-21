import React, { FC } from "react";
import { Link } from "react-router-dom";
import icon from "./assets/icon.png";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <div className="Main">
        <img src={icon} className="App-logo" alt="logo" width={300} />
      </div>
      <h1>T-Up Control Center</h1>
      <div className="Main">
        <Link to="/t-lounge">
          <button type="button">T-Lounge</button>
        </Link>
        <Link to={"mini-golf"}>
          <button type="button">Mini-Golf</button>
        </Link>
      </div>
    </>
  );
};

export default App;
