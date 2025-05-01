import React from "react";
import icon from "./assets/icon.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <div className="logo-container">
            <img src={icon} className="logo" alt="Laboo-Beauty Bar logo" />
          </div>
        </li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Who Are We</a></li>
        <li><a href="#booking">Policies</a></li>
        <li><a href="#review">Review</a></li>
        <li>
          <button className="nav-button">
            <a href="#booking">Book Now</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


