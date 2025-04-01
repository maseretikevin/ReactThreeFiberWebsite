import React from "react";
import Social from "../Social";

const Footer = () => {
  return (
    <>
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  <span className="copyright-text">
                    Copyright © {new Date().getFullYear()}{" "}
                    <a href="#">Masereti Kevin</a>. All rights reserved.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <Social />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
