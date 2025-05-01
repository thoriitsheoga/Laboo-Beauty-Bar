import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from './Bookings/userContext'; 
import icon from "./assets/icon.jpg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserName } = useUser(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(fullName);
    setShowModal(false);
    navigate("/booking");
  };

  return (
    <>
      {/* Your nav JSX here */}
      <button onClick={() => setShowModal(true)}>Book Now</button>

      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
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
            <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;



