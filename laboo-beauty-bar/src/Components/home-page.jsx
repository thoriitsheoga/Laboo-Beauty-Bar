import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Bookings/userContext"; 
import icon from "./assets/icon.jpg";
import { Menu, X } from "lucide-react";
import axios from "axios"; 

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (isSignUp) {
      if (!formData.fullName.trim()) newErrors.fullName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Valid phone number required';
    }

    if (!emailRegex.test(formData.email)) newErrors.email = 'Valid email required';
    if (formData.password.length < 8 || formData.password.length > 10) {
      newErrors.password = 'Password must be 8–10 characters';
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const endpoint = isSignUp ? '/api/customers/signup' : '/api/customers/login';

    const payload = {
      name: formData.fullName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    };

    const { data } = await axios.post(endpoint, payload);

    // Handle successful authentication
    if (isSignUp) {
      setUserName(`${formData.fullName} ${formData.lastName}`);
      alert('Account created successfully!');
    } else {
      setUserName(data.user?.email || formData.email);
      alert('Signed in successfully!');
    }

    // Close modal and navigate to booking page
    setShowModal(false);
    navigate("/booknow");

  } catch (err) {
    const message = err.response?.data?.error || err.message || "Something went wrong";
    setErrors({ submit: message });
  } finally {
    setIsSubmitting(false);
  }
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
            <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>
            {errors.submit && <div className="error-message">{errors.submit}</div>}
            
            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="First Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    {errors.fullName && <span className="input-error">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    {errors.lastName && <span className="input-error">{errors.lastName}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && <span className="input-error">{errors.phone}</span>}
                  </div>
                </>
              )}

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="input-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password (8–10 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="input-error">{errors.password}</span>}
              </div>

              {isSignUp && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <span className="input-error">{errors.confirmPassword}</span>
                  )}
                </div>
              )}

              <button 
                type="submit" 
                className="auth-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner">Processing...</span>
                ) : (
                  isSignUp ? "Create Account" : "Sign In"
                )}
              </button>
            </form>

            <p className="auth-toggle">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => {
                setIsSignUp(!isSignUp);
                setErrors({});
              }}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>

            <button 
              className="close-btn" 
              onClick={() => {
                setShowModal(false);
                setErrors({});
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;