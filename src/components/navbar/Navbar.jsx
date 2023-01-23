import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-md fixed-top blur">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item pointer" onClick={()=>{
              navigate("/")
            }}>
              <p className="nav-link text-style">Home</p>
            </li>
            <li className="nav-item pointer">
              <p className="nav-link text-style">Shop</p>
            </li>
            <li className="nav-item pointer">
              <p className="nav-link text-style">FAQ</p>
            </li>
            <li className="nav-item pointer">
              <p className="nav-link text-style">Portfolio</p>
            </li>
            <li className="nav-item pointer">
              <p className="nav-link text-style">Fashion advise</p>
            </li>
          </ul>
        </div>
        <div className="icon-alignment">
          <i className="bi-heart spacing" style={{fontSize: '2rem', color: '#656565'}}></i>
          <i className="bi-cart3 spacing" style={{fontSize: '2rem', color: '#656565'}}></i>
          <i className="bi-person spacing" style={{fontSize: '2rem', color: '#656565'}}></i>
          <i className="bi-search spacing-red" style={{fontSize: '2rem', color: '#ffffff'}}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
