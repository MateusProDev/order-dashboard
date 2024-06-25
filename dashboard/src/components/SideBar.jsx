// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
