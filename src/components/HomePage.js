import React from "react";
import "./HomePage.css";
import logo from "./images/logo_h.png";
import Timeline from "./Timeline";
import DevCalendar from "./DevCalendar";

const HomePage = () => {
  return (
    <div className="background-color">
      <div className="align-items">
        <img src={logo}></img>
        <h1 className="header-padding">How to use diCommunity</h1>
        <div className="header-padding">
          <Timeline />
        </div>
        <h1>Development Timeline</h1>
        <div>
          <h3>Check out what our development team is working on</h3>
        </div>
        <div className="container">
          <DevCalendar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
