import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import links from "./data";
import care from "./mycare.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Myroutes } from "./data";
import { NavLink } from "react-router-dom";
import Facebook from "../ButtonComponents/Facebook";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  let auth = getAuth();
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const Myroutes = () => {
    let auth = getAuth();
    const user = auth.currentUser;
    return (
      <div className="links" ref={linksRef}>
        <button className="btnLink">
          <NavLink className="Navigate" to="/home">
            Home
          </NavLink>
        </button>
        <button className="btnLink">
          <NavLink className="Navigate" to="/about">
            About
          </NavLink>
        </button>
        {user && (
          <button className="btnLink">
            <NavLink className="Navigate" to="/hospital">
              Find Hospital
            </NavLink>
          </button>
        )}
      </div>
    );
  };

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    signOut(auth).then(() => {
      navigate("/login");
      console.log(auth.currentUser);
    });
  };
  const HandleLogin = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/register");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={care} id="care" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <Myroutes />
        </div>
        <div className="social-icon">
          {" "}
          <button className="auth-Btn" onClick={HandleLogin}>
            SignUp
          </button>
          <button className="auth-Btn" onClick={handleLogout}>
            SignOut
          </button>
          <button className="auth-Btn">
            {" "}
            <Facebook />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
