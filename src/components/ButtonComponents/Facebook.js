import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Button.css";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";
import { FaFacebook } from "react-icons/fa";

const Facebook = () => {
  const navigate = useNavigate();
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
    return;
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <button onClick={signInWithFacebook} className="Fbtn">
        <span>sigIn with</span> <FaFacebook />
      </button>
    </div>
  );
};
export default Facebook;
