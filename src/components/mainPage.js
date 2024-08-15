import React from "react";
import NavHeader from "./navHeader";
import NavBar from "./navBar";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="main-wrapper">
      <div className="navs-wrapper">
        <div className="nav-header-wrapper">
          <NavHeader />
        </div>
        <div className="nav-bar-wrapper">
          <NavBar />
        </div>
      </div>
    </div>
  );
}
export default MainPage;
