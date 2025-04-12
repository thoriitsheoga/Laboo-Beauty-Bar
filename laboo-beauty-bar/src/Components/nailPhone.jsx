import React from "react";
import nailImage from "./assets/nailphone.png";
import locationImage from "./assets/location.jpg";

const AddNailPhoneComponent = () => {
  return (
    <div className="landing-page">
      <div className="main-container">
        <div className="left-side">
          <img src={nailImage} alt="mockup" className="side-image" />
        </div>
        <div className="right-side">
          <div className="title-wrapper">
            <h3 className="white-text">Welcome to my booking site:</h3>
            <div className="info-wrapper">
              <h1 className="title">Laboo</h1>
              <h3 className="title-trailer">b e a u t y b a r</h3>
            </div>
            <h4 className="services">
              Nails| Luxury Hair| Hair Installation | Wig Customization
            </h4>
          </div>
        </div>
      </div>
      <div className="shop-location">
        <img src={locationImage} className="location-image" />
        <a src="#" className="location-tag">
          Mankweng ,Turf, UL Gate 2{" "}
        </a>
      </div>
    </div>
  );
};
export default AddNailPhoneComponent;
