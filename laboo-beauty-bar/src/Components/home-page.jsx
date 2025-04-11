import React from "react";
import icon from "./assets/icon.jpg";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <div className="logo-container">
              <img src={icon} className="logo" alt="Laboo-Beauty Bar logo" />
            </div>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Who Are We</a>
          </li>
          <li>
            <a href="#">Policies</a>
          </li>
          <li>
            <a href="#">Client Albums</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <button className="nav-button">
              <a href="#">Book Now</a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
