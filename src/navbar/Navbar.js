import React from "react";
import "./../css/navbar.css";
import Navimage from "./../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " id="nav">
        <div className="container-fluid">
          <img src={Navimage} alt="logo" height={"70.7px"} width={"129px"} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-primary" id="btn1">
                  Start A Fundraiser
                </button>
              </li>
              <li className="nav-item">
                <i className="fas fa-user-plus" id="icon"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
