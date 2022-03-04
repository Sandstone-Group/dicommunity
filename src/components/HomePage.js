import React from "react";
import "./HomePage.css";
import logo from "./images/logo_h.png";

const HomePage = () => {
  return (
    <div className="home-logo">
      <img src={logo}></img>
      <h1>Welcome to diCommunity</h1>
      <div></div>
      <h2>To Begin, Click the Sidebar Menu</h2>
    </div>
  );
};

export default HomePage;