import React from "react";
import Footer from "./Footer";
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
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;
