import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Button.css";
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
export default Login;
