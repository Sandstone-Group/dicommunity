import React from "react";
import "./HomePage.css";
import logo from "./images/logo_h.png";
import Timeline from "./Timeline";

const HomePage = () => {
  return (
    <div className="background-color">
      <div className="align-items">
        <img src={logo}></img>
        <h1>How to use diCommunity</h1>
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
