import React from "react";
import { NavLink } from "react-router";
import "../../index.css";
import "../../../public/css/all.min.css";
import "../../../public/css/bootstrap-icons.css";
// import "../../../public/css/bootstrap.min.css";

const Nav = () => {
  return (
    <>
      <div className="sticky-wrapper is-sticky" style={{ height: 93 }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a href="/" className="navbar-brand mx-auto mx-lg-0">
              MK
            </a>

            <div className="d-flex align-items-center d-lg-none">
              <i className="navbar-icon bi-telephone-plus me-3"></i>
              <button className="custom-btn btn custom-link">
                +254716611936
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5">
                <li className="nav-item">
                  <NavLink className="nav-link click-scroll" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link click-scroll" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link click-scroll" to="/projects">
                    Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link click-scroll" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="d-lg-flex align-items-center d-none ms-auto">
                <i className="navbar-icon bi-telephone-plus me-3"></i>
                <a
                  className="custom-btn btn"
                  href="https://www.linkedin.com/in/masereti-kevin-136310117"
                >
                  @maseretikevin
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
