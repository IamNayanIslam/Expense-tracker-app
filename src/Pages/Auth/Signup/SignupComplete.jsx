import { useNavigate } from "react-router-dom";
import "./SignupComplete.css";

export default function SignupComplete() {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="sign-complete">
      <h1>You have successfully signed up to our services</h1>
      <button onClick={handleGoLogin}>LOGIN</button>
    </div>
  );
}
