import { Link, useLoaderData } from "react-router-dom";
import "./Users.css";
import { useEffect } from "react";

export default function Team() {
  const datas = useLoaderData();
  useEffect(() => {
    document.title = "Users || React Router";
  });

  return (
    <div className="team-wrap">
      <h1>Meet our users!</h1>
      <div className="posts">
        {datas.map((data) => (
          <div className="post" key={data.id}>
            <div className="img">
              <img src={`/${data.id}.jpg`} alt="" />
            </div>
            <div className="details">
              <h3>Name: {data.name}</h3>
              <p className="userName"> @{data.username}</p>
              <p>Email: {data.email}</p>
              <p>Website: {data.website}</p>
            </div>
            <Link to={`/team/${data.id}`}>
              <button>More Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
