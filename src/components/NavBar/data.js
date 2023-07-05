import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getAuth } from "firebase/auth";

export const AuthButton = () => {
  const goHome = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  const handleLogin = () => {
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
    <div>
      <button onClick={goHome}>home</button>
      <button></button>
      <button></button>
    </div>
  );
};

// const handleLogout = () => {
//   sessionStorage.removeItem("Auth Token");
//   navigate("/login");
// };
// const handleLogin = () => {
//   sessionStorage.removeItem("Auth Token");
//   navigate("/register");
// };
// let navigate = useNavigate();
// useEffect(() => {
//   let authToken = sessionStorage.getItem("Auth Token");
//   console.log(authToken);
//   if (authToken) {
//     navigate("/home");
//   }

//   if (!authToken) {
//     navigate("/login");
//   }
// }, []);

const links = [
  {
    id: 1,
    url: "/",
    text: (
      <NavLink className="Navigate" to="/home">
        Home
      </NavLink>
    ),
  },
  {
    id: 2,
    url: "/about",
    text: (
      <NavLink className="Navigate" to="/about">
        About
      </NavLink>
    ),
  },
  {
    id: 3,
    url: "/projects",
    text: (
      <NavLink className="Navigate" to="/hospital">
        Find Hospital
      </NavLink>
    ),
  },
];
// currentUser && <FindHospitalButton />;

export default links;
