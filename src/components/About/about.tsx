import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import FooterLayout from "./FooterLayout.tsx";
import { useNavigate } from "react-router-dom";
import "./about.css";
import ThreeColumnLayout from "./ThreeColumnLayout.tsx";
import careAbout from "./images/aboutcare.webp";
import doc1 from "./images/doctor1.jpg";
import doc2 from "./images/doctor2.jpg";
import doc3 from "./images/doctor3.jpg";
import doc4 from "./images/doctor4.jpg";
import doc5 from "./images/doctor5.jpg";
import doc6 from "./images/doctor6.jpg";
import Form from "./Form.tsx";
import { Helmet } from "react-helmet-async";

function About(): JSX.Element {
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
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="careFinder about page" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="container">
        <div className="content">
          <div className="left-content">
            <img className="aboutImg" src={careAbout} />
          </div>
          <div className="right-content">
            <h3>About CareFinder</h3>
            <p>
              Welcome to Care Finder, your trusted companion in finding quality
              healthcare services near you. Our mission is to connect
              individuals with compassionate care providers and guide them
              towards exceptional care services.
            </p>
            <h3>Who We Are</h3>
            <p>
              At Care Finder, we understand the importance of finding the right
              healthcare services that cater to your unique needs. Whether
              you're looking for hospitals, clinics, doctors, or specialists,
              we've got you covered. Our platform simplifies the process of
              finding and accessing healthcare facilities and professionals in
              your area.
            </p>
            <div>
              <h3>Get Started</h3>
              <p>
                Ready to discover quality care services near you? Start using
                Care Finder today to find the nearest hospitals, clinics, and
                healthcare providers. Take control of your healthcare journey
                and experience exceptional care that meets your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="docText">
        <h3>Qualified Doctors</h3>{" "}
      </div>
      <div className="image-container">
        <div className="column">
          <div className="circle">
            <img src={doc1} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Dr. John Doe</p>
            <p>Cardiologist</p>
          </div>
          <div className="circle">
            <img src={doc2} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Dr. James Smith</p>
            <p>Dermatologist</p>
          </div>
          <div className="circle">
            <img src={doc5} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Dr. Angela Jones</p>
            <p>Optician</p>
          </div>
        </div>

        <div className="column">
          <div className="circle">
            <img src={doc3} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Dr. Mark Johnson</p>
            <p>Pediatrician</p>
          </div>
          <div className="circle">
            <img src={doc4} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Dr. Sarah Davis</p>
            <p>Obstetrician</p>
          </div>
          <div className="circle">
            <img src={doc6} alt="Profile Picture" />
          </div>
          <div className="text">
            <p>Michael Marvins</p>
            <p>Gynaecologist</p>
          </div>
        </div>

        <div className="column">
          <Form />
        </div>
      </div>
      <div className="user-review">
        <h3>What Our Users Say</h3>
      </div>
      <ThreeColumnLayout />
      <FooterLayout />
    </>
  );
}

export default About;
