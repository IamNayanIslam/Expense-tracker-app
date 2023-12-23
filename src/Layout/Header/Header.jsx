import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect } from "react";

export default function Header() {
  return (
    <div className="header-wrap">
      <nav>
        <div className="logo">
          <h1>
            <Link to="" className="link">
              NAYAN
            </Link>
          </h1>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <NavLink to="" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="link">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <Link to="/login" className="link">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
