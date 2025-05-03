import React from "react";
import { useUser } from './Bookings/userContext';
import PlainNails from './assets/plainnails.png';
import WigAppointment from './assets/wigappointment.jpg';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import BookWig from "./wig-booking";

const BookingNow = () => {
  const { userName } = useUser();
  const goToWigBooking = () =>{
    Navigate('/BookWig')
  }

  return (
    <>
    <div className="booking-container">
      <h1 className="booknow-title" >Welcome {userName || "Guest"}</h1>
      <h2 className="booknow-subtitle">HOW CAN WE BE OF SERVICE TODAY? </h2>
    </div>
    <div className="booknow-image-container">
        <div className="booknow-image-container1">
            <a href="#">
            <img src={PlainNails} className="booknow-image"/>
            <Link to ='/pick-nail-shape' className="booknow-links">Nail Appointment</Link>
            </a>
        </div>
        <div className="booknow-image-container2" onClick={goToWigBooking}>
            <a href="#wig-booking" onClick={() => setIsOpen(false)}>
            <img src={WigAppointment} className="booknow-image"/>
            <Link to ='/wig-booking' className="booknow-links">Wig Appointment </Link>
            </a>
        </div>
    </div>
  </>
  );
};

export default BookingNow;