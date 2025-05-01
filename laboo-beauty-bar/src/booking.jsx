import React from "react";
import { useUser } from './Components/Bookings/userContext'; 
import PlainNails from './Components/assets/plainnails.png';

const BookingNow = () => {
  const { userName } = useUser();

  return (
    <>
    <div className="booking-container">
      <h1>Welcome {userName || "Guest"}</h1>
      <h2>HOW CAN WE BE OF SERVICE TODAY? </h2>
    </div>
    <div className="image-container">
        <div className="image-container1">
            <a href="#">
            <img src={PlainNails}/>
            <p>Nail Appointment</p>
            </a>
        </div>
        <div className="image-container2">
            <a href="#">
            <img src="#"/>
            <p>Wig Appointment </p>
            </a>
        </div>
    </div>
  </>
  );
};

export default BookingNow;
