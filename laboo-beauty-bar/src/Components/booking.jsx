import React from "react";

const BookingPolicies = () => {
    return(
        <>
        <h1 className="bookingpolicies-title">Booking <span className="booking-title">Policies</span></h1>
        <div className="policy-container-one">
        <div className="policy">
            <p className="black"> A non-refundable deposit of R100 is required</p>
        </div>
        <div className="policy">
            <p className="yellow">Don’t be more than 20 minutes late or you will lose your spot </p>
        </div>
        <div className="policy">
            <p className="black">
            When booking your appointment, mention the service you want
            </p>
        </div>
        </div>
        <div className="policy-container-two">
        <div className="policy">
            <p className="yellow">
            Inform us 4 hours in advance if you are going to cancel
            </p>
        </div>
    
        <div className="policy">
            <p className="black">
            WE DONT TAKE CASH,CARD ONLY!!
            </p>
        </div>
        <div className="policy">
            <p className="yellow">
            Provide a picture of the nails you would like if you have one  
            </p>
        </div>
        </div>
        </>
    )

}
export default BookingPolicies;