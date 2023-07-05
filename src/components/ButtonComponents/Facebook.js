import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Button.css";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
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
    <section>
      <p>
        dont have an account?
        <span>
          <button onClick={HandleLogin}>SignUp</button>
        </span>
      </p>
    </section>
  );
};

const Facebook = () => {
  const navigate = useNavigate();
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        let authToken = sessionStorage.getItem("Auth Token");

        navigate("/home");

        // console.log(getAuth());
      })
      .catch((err) => {
        console.log(err.message);
      });
    return;
  };

  return (
    <div>
      <button onClick={signInWithFacebook}>facebook</button>
    </div>
  );
};
export default Facebook;
