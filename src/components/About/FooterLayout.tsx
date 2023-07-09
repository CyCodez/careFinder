import React from "react";
import { NavLink, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
const FooterLayout: React.FC = () => {
  let auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h3>CareFinder</h3>
        <h4>Plot 42, Akinza Street,</h4>
        <h4> Victoria Island Lagos.</h4>
        <h4>
          <a href="tel:+23491673521788">+23491673521788</a>
        </h4>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <Link to="/news">
          {" "}
          <h4>New & Media</h4>
        </Link>
        <h4>
          <NavLink to="/contact">Contact Us</NavLink>
        </h4>
      </div>
      <div className="footer-column">
        <h3>My Account</h3>
        <Link to="/about#form-container">
          <h4>Book An Appointments</h4>
        </Link>
        <Link to="/library">
          <h4>Library</h4>
        </Link>
        {user && (
          <Link to="/appointment">
            <h4>View All Appointment</h4>
          </Link>
        )}
      </div>
    </div>
  );
};
export default FooterLayout;
