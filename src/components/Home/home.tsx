import React, { useEffect } from "react";
import care from "./careImg.jpg";
import "./home.css";
import FooterLayout from "../About/FooterLayout.tsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { signOut } from "firebase/auth";

function HomePage(): React.JSX.Element {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      signOut(auth).then(() => {
        navigate("/login");
      });
    }
  }, []);
  return (
    <>
      <div className="home-Container">
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="gives an overview of the entire application"
          />
          <link rel="canonical" href="/home" />
        </Helmet>
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
            <NavLink to="/startPage">
              <button className="startBtn">
                <span className="startText">GET STARTED</span>
              </button>
            </NavLink>
          </div>
          <div className="flex1s">
            <p className="para1">health Is wealth</p>
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
