import "./App.css";
import BasicTextFields from "./components/common/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./components/Home/home.tsx";
import About from "./components/About/about.tsx";
import Map from "./components/FindHospital/Hospital.tsx";
import Navbar from "./components/NavBar/Navbar";
import { useState, useEffect } from "react";
import { app } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/ButtonComponents/Login";
import SignUp from "./components/ButtonComponents/Signup";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.

import FroalaEditor from "react-froala-wysiwyg";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import Facebook from "./components/ButtonComponents/Facebook";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          // console.log(getAuth());
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
          if (error.code === "400") {
            toast.error("enter valid emal");
          }
          if (email === "") {
            toast.error("please enter an email");
          }
          if (password === "") {
            toast.error("please enter password");
          }
          if (email && password === "") {
            toast.error("enter email and password");
          }
        });
      setEmail(" ");
      setPassword(" ");
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          setEmail("");
          setPassword("");
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
          if (email === "") {
            toast.error("please enter an email");
          }
          if (password === "") {
            toast.error("please enter password");
          }
          if (email && password === "") {
            toast.error("enter email and password");
          }
        });
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);

  // const Facebook = () => {
  //   const signInWithFacebook = () => {
  //     const provider = new FacebookAuthProvider();
  //     const authentication = getAuth();
  //     signInWithPopup(auth, provider)
  //       .then((response) => {
  //         navigate("/home");
  //         sessionStorage.setItem(
  //           "Auth Token",
  //           response._tokenResponse.refreshToken
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     return;
  //   };
  //   return (
  //     <div>
  //       <button onClick={signInWithFacebook}>facebook</button>
  //     </div>
  //   );
  // };

  return (
    <div className="App">
      <Facebook />
      {/* <FroalaEditor tag="textarea" /> */}
      <ToastContainer />
      <Navbar />
      <div>
        <Routes>
          <Route
            index
            element={
              <BasicTextFields
                setEmail={setEmail}
                setPassword={setPassword}
                title="login"
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/login"
            element={
              <BasicTextFields
                setEmail={setEmail}
                setPassword={setPassword}
                title="login to continue"
                btnTitle="login"
                SignUpComponent={<Login />}
                Facebook={<Facebook />}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <BasicTextFields
                setEmail={setEmail}
                setPassword={setPassword}
                title="To Begin SigUp"
                btnTitle="signUp"
                SignUpComponent={<SignUp />}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/hospital" element={<Map />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
