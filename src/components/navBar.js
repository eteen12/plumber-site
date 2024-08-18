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
      {/* STYLING FOR BIGGER SCREENS!!!!!!! */}
      <nav class="nav-bar-large">
        <div class="logo-wrapper">
          <img src="/images/your-logo.png" alt="Logo" class="logo" />
        </div>
        <div class="menu-wrapper">
          <ul>
            <li>
              <a href="/home" className="page">Home</a>
            </li>
            <li>
              <a href="/services" className="page">Services</a>
            </li>
            <li>
              <a href="/about" className="page">About</a>
            </li>
            <li>
              <a href="/contact" className="page">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
