import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // step 1
import SeekersLogo from "../../pictures/Seekers-Logo.png";
import "./Navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [alink, setALink] = useState("#fff");
  const [btnColor, setbtnColor] = useState("#fff");
  const [btnBorderColor, setBtnBorderColor] = useState("2px solid #fff");

  useEffect(() => {
    if (window.location.pathname === "/listings") {
      setALink("#333");
      setbtnColor("#333");
      setBtnBorderColor("2px solid #333");
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setALink("#333");
      setbtnColor("#333");
      setBtnBorderColor("2px solid #333");
    }
  });

  const handleClick = () => {
    setClick(!click);
  };

  const returnHome = () => {
    window.location = "/";
  };

  return (
    <div className="navbar">
      <div className="container">
        <img
         alt="Seekers-logo"
          onClick={returnHome}
         src= {SeekersLogo}
         className="Seekers-logo"
        ></img>
        <div className="icon" onClick={handleClick}>
          {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 />}
        </div>
        <div className={click ? "menu-container active" : "menu-container"}>
          <ul className="nav-menu">
          <a className="aLinks" href="/" style={{ color: `${alink}` }}>
            Home 
          </a>
            <a className="aLinks" href="/Awards" style={{ color: `${alink}` }}>
              Awards
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Sell
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Mortgage
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Real Estate Agents
            </a>
            <a className="aLinks" href="/Contact" style={{ color: `${alink}` }}>
              Contact Us
            </a>
          </ul>
          <button
            className="btn"
            style={{ color: `${btnColor}`, border: `${btnBorderColor}` }}
          >
            Log In
          </button>
          <button
            className="btn"
            style={{ color: `${btnColor}`, border: `${btnBorderColor}` }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;