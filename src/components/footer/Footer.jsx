import React from "react";
import Social from "../Social";

const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-6">
              <div class="copyright-text-wrap">
                <p class="mb-0">
                  <span class="copyright-text">
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
