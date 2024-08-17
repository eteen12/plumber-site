import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content-wrapper">
        <div className="logo-wrapper">
          <img src="/images/your-logo.png" alt="Your Logo" className="logo" />
        </div>
        <div className="menu-wrapper">
          <img src="/images/menu.png" className="menu" alt="menu" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
