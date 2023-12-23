import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { RxCross2 } from "react-icons/rx";

export default function Login() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="login-wrap">
      <form action="">
        <RxCross2 className="close" onClick={handleGoHome} />
        <input type="email" placeholder="Enter your email address..." />
        <input type="password" placeholder="Enter your password..." />
        <button onClick={handleGoHome}>LOGIN</button>
        <a href="#">Forgot Password?</a>
        <p>
          Don't have an account? <Link onClick={handleGoSignup}>Signup</Link>
        </p>
      </form>
    </div>
  );
}
