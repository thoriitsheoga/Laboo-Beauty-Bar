// Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Bookings/userContext"; 
import icon from "./assets/icon.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(fullName || email); // Use full name or email as user name
    setShowModal(false);
    navigate("/booknow"); // Navigate to the Booking page after successful login/signup
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img src={icon} className="logo" alt="Laboo-Beauty Bar logo" />
          </div>

          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>Who Are We</a></li>
            <li><a href="#booking" onClick={() => setIsOpen(false)}>Policies</a></li>
            <li><a href="#review" onClick={() => setIsOpen(false)}>Review</a></li>
            <li>
              <button className="nav-button" onClick={() => setShowModal(true)}>Book Now</button>
            </li>
          </ul>
        </div>
      </nav>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">{isSignUp ? "Create Account" : "Sign In"}</button>
            </form>
            <p className="toggle-link">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;





