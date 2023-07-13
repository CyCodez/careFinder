import "./App.css";
import BasicTextFields from "./components/common/Form.tsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/Home/home.tsx";
import About from "./components/About/about.tsx";
import Map from "./components/FindHospital/Hospital.tsx";
import Navbar from "./components/NavBar/Navbar";
import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/ButtonComponents/Login";
import SignUp from "./components/ButtonComponents/Signup";
import Facebook from "./components/ButtonComponents/Facebook";
import GetStarted from "./components/Home/StartPage/GetStarted.tsx";
import ContactUs from "./components/Home/contact/ContactUs.tsx";
import LibraryPage from "./components/Libaray/LbraryPage.tsx";
import NewsAndMedia from "./components/NewsMedia/NewsAndMedia.tsx";
import FetchUser from "./components/Appointment/fetchdata";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();
  const auth = getAuth;
  const Loading = () => {
    return <div className="loading">Logging in please wait...</div>;
  };
  const Signing = () => {
    return <div className="loading">signing in please wait...</div>;
  };
  const handleAction = (id) => {
    const authentication = getAuth();
    setisLoading(true);
    if (id === 1) {
      setisLoading(true);
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          setEmail("");
          setPassword("");
          navigate("/home");
          setisLoading(false);
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
          setisLoading(false);
        });
      setEmail(" ");
      setPassword(" ");
    }
    if (id === 2) {
      setisLoading(true);
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          setEmail("");
          setPassword("");
          navigate("/home");
          setisLoading(false);
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
          setisLoading(false);
        });
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    sessionStorage.removeItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="App">
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
                pwdtxt="password must be at least 6 characters"
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
                pwdtxt="password must be at least 6 characters"
                SignUpComponent={<Login />}
                Facebook={<Facebook />}
                LoadingState={<Loading />}
                isLoading={isLoading}
                setisLoading={setisLoading}
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
                pwdtxt="password must be at least 6 characters"
                title="To Begin SignUp"
                btnTitle="signUp"
                SignUpComponent={<SignUp />}
                LoadingState={<Signing />}
                isLoading={isLoading}
                setisLoading={setisLoading}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/startPage" element={<GetStarted />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/hospital" element={<Map />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/appointment" element={<FetchUser />} />
          <Route path="/news" element={<NewsAndMedia />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
