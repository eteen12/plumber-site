import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="nav-header-wrapper">
      <div className="nav-img-wrapper">
        <a
          href="https://github.com/eteen12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-logo.png" alt="GitHub Logo" />
        </a>
      </div>
      <div className="nav-phone-number-wrapper">
        <a href="tel:+17785819151" className="nav-phone-number">
        📞778-581-9151
        </a>
      </div>
    </div>
  );
}

export default Footer;
