/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      className="header-nav"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "4rem",
        background: "rgba(244, 226, 174,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Home
      </a>
      <a href="#about" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        About
      </a>
      <a href="#education" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Education
      </a>
      <a href="#portfolio" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Portfolio
      </a>
      <a href="#footer" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Contact
      </a>
    </div>
  );
};

export default Header;
