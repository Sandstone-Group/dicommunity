import React from "react";
import "./HomePage.css";
import logo from "./images/logo_h.png";
import Timeline from "./Timeline";
import DevCalendar from "./DevCalendar";

const HomePage = () => {
  return (
    <div className="background-color">
      <img src={logo}></img>
      <div className="header-padding">
        <Timeline />
        <div className="container-better">
          <DevCalendar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
