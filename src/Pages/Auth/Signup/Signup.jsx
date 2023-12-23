import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowBack } from "react-icons/io";

export default function Signup() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="signup-wrap">
      <form action="">
        <RxCross2 className="close" onClick={handleGoHome} />
        <div className="name">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button>
          <Link to="/complete" className="link">
            SIGNUP
          </Link>
        </button>
        <button className="back-btn" onClick={handleGoBack}>
          <IoMdArrowBack /> Go back
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link className="link" onClick={handleGoLogin}>
          Login
        </Link>
      </p>
    </div>
  );
}
