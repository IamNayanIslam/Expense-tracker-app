import { useLoaderData, useNavigate } from "react-router-dom";
import "./SingleMember.css";
import { useEffect } from "react";

export default function SingleMember() {
  const memberData = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "User Profile || React Router";
  });
  // console.log(memberData);
  return (
    <div className="member-wrap">
      <div className="member">
        <div className="img">
          <img src={`/${memberData.id}.jpg`} alt="" />
        </div>
        <div className="details">
          <h3>{memberData.name}</h3>
          <p>@{memberData.username}</p>
          <p>Email: {memberData.email}</p>
          <p>Phone: {memberData.phone}</p>
          <p>Company: {memberData.company.name}</p>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
}
