import React from "react";
import NavHeader from "./navHeader";
import NavBar from "./navBar";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="main-wrapper">
      <div className="nav-bar-wrapper">
        <NavBar />
      </div>
      <div className="body"></div>
      <div className="footer">
        <NavHeader />
      </div>
    </div>
  );
}
export default MainPage;
