import React from "react";
import nailImage from "./assets/nailphone.png";

const AddNailPhoneComponent = () => {
  return (
    <div className="main-container">
      <div className="left-side">
        <img src={nailImage} alt="mockup" className="side-image" />
      </div>
      <div className="right-side">
        <h3 className="white-text">Welcome to my booking site:</h3>
        <h1 className="title">Laboo</h1>
        <h3 classname="title-trailer">b e a u t y b a r</h3>
        <h4 className="services">
          Nails| Luxury Hair| Hair Installation | Wig Customization
        </h4>
      </div>
    </div>
  );
};
export default AddNailPhoneComponent;
