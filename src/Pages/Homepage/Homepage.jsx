// import "./Homepage.css";

import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Home Page || React Router";
  });
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "95px" }}>
        This is the homepage!
      </h1>
    </div>
  );
}
