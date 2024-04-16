import React, { Component } from "react";
import eyepax from "../../Source/Logo/eyepax.png";
import "../../CSS/edu.css";

const Experience = () => {
  return (
    <div className="eduSection">
      <div className="myShape2"></div>
      <div className="container eduSet">
        <span className="eduTopic" data-aos="fade-right">
          Experience
        </span>
        <div className="row">
          <div
            className="col-md-6 myBox"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img src={eyepax} alt="scl logo" className="sclLogo" />
            Intern Software Engineer - 6 Months
            <br />
            Eyepax IT Consulting (Pvt) Ltd
          </div>
          <div className="col-md-6 myBox" data-aos="fade-up">
            <img src={eyepax} alt="scl logo" className="sclLogo" />
            Junior Software Engineer - 6 Months
            <br />
            Eyepax IT Consulting (Pvt) Ltd
          </div>
        </div>
        <div className="myShape3"></div>
        <div className="myShape4"></div>
      </div>
    </div>
  );
};

export default Experience;
