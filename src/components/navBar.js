import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <div className="nav-wrapper">
      <div className="img-wrapper">
        <img src="/images/your-logo.png" alt="Your Logo" class="logo" />
      </div>
      <div className="menu-wrapper">
        <img src="/images/menu.png" class="menu" alt="menu"></img>
      </div>
    </div>
  );
}

export default NavBar;
