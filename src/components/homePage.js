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
      <div className="text-wrapper">
          <p className="text-header">Kelownas Choice</p>
          <h1 className="text">PLUMBING & PLUMBING CO</h1>
        </div>
    </div>
  );
}
export default HomePage;
