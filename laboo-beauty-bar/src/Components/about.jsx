import React from "react";
import ProfilePic from "./assets/ProfilePic.jpg";

function AboutSection() {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <img
            src={ProfilePic}
            alt="your nail tech"
            className="profile-picture"
          />
        </div>
        <div className="about-right">
          <h1 className="about-title">Your New Favourite NailTech</h1>
          <h2 className="about-subtitle">let a boo do your nails</h2>
          <p className="about-description">
            <div>
              Hello, I am Lethabo, a self-taught nail tech situated at Gate 2,
              UL
            </div>
            <div>
              I look forward to making your pinterest board nails come to life.
            </div>
            <div>
              My goal is to ultimately leave you pleased with your new set.
            </div>
            <div>I can’t wait to meet you🤍</div>
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
