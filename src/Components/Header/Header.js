import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <ul className="header_container_lists">
        <h1 className="header_container_lists_heading">Project Name</h1>
        <h3 className="header_container_lists_sub_heading">Navigation</h3>
        <li>
          <Link className="header_container_lists_style" to="/">
            <i class="fas fa-home"></i>
            Home
          </Link>
        </li>
        <li>
          <Link className="header_container_lists_style" to="/Dashboard">
            <i class="fas fa-tachometer-alt"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <h3 className="header_container_lists_sub_heading">Another Menu</h3>
          <Link className="header_container_lists_style" to="/Friends">
            <i class="fas fa-users"></i>
            Friends
          </Link>
        </li>
        <li>
          <Link className="header_container_lists_style" to="/Settings">
            <i class="fas fa-cog"></i>
            Settings
          </Link>
        </li>
        <li>
          <Link className="header_container_lists_style" to="/Information">
            <i class="fas fa-info-circle"></i>
            Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
