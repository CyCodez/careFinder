import React from "react";
import care from "./careImg.jpg";
import "./home.css";
import FooterLayout from "../FooterLayout";

function HomePage(): React.JSX.Element {
  return (
    <>
      <div className="home-Container">
        <div className="homeText1">
          <h2 className="flex1s">
            Find The nearest hospital to you and make an appointment today
          </h2>
          <div className="flex1s">
            <p className="para1">
              Discover Quality Care Services Near You Find Compassionate Care
              Providers in Your Area, Your Trusted Guide to Exceptional Care
              Services.
            </p>
          </div>
          <div className="flex1s">
            <button className="startBtn">
              <span className="startText">GET STARTED</span>
            </button>
          </div>
          <div className="flex1s">
            <p className="para1">Learn more</p>
          </div>
        </div>
        <div className="photoContainer">
          <img className="carePhoto" src={care} alt="care Photo" />
        </div>
      </div>
      <p className="find-text">
        Signup to find a nearby hospital and receive quality health care service
        today
      </p>
      <FooterLayout />
    </>
  );
}
export default HomePage;
