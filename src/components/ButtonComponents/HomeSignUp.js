import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Button.css";
const HomeSignUp = () => {
  const HandleLogin = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/register");
    }
  }, []);

  return (
    <section>
      <p>
        <span>
          <button onClick={HandleLogin}>get Started</button>
        </span>
      </p>
    </section>
  );
};
export default HomeSignUp;
