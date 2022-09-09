import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light container-fluid ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Chinelo Obigwe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
              <a className="nav-link" href="#">
                SKILLS
              </a>
              <a className="nav-link" href="#">
                EXPERIENCE
              </a>
              <a className="nav-link" href="#">
                EDUCATION
              </a>
              <a className="nav-link" href="#">
                PORTFOLIO
              </a>
              <a className="nav-link" href="#">
                FEEDBACK
              </a>
              <a className="nav-link" href="#">
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
