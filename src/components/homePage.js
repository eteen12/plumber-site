import React, { useState } from "react";
import "./homePage.css";

function HomePage() {
  return (
    <div className="page-wrapper">
      <div className="img-wrapper">
        <img
          src="/images/home-page.png"
          alt="plumbing picture"
          className="home-img"
        />
      </div>
    </div>
  );
}
export default HomePage;
