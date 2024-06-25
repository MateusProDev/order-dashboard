import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="top-navbar">
      <div className="logo">
        <Link to="/"><img src="/img/logo.png" alt="logo" className="logo-image" /></Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
