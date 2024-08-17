import React, { useState } from "react";
import "./navBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content-wrapper">
        <div className="logo-wrapper">
          <img src="/images/your-logo.png" alt="Your Logo" className="logo" />
        </div>
        <div className="menu-wrapper" onClick={toggleMenu}>
          <img src="/images/menu.png" className="menu" alt="menu" />
        </div>
      </div>
      <div className={`slide-in-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-btn-wrapper">
          <button className="close-btn" onClick={toggleMenu}>
            {" "}
            <img src="/images/close-x.png" alt="close" className="close-btn" />
          </button>
        </div>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
