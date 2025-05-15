import React from "react";
import Footer from "../footer/Footer";
import Nav from "../navigation/Nav";

const Projects = () => {
  return (
    <>
      <main>
        <Nav />
        <section className="projects section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12 ms-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="images/white-desk-work-study-aesthetics.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Projects</h2>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Full Stack Website</small>

                    <h3 className="projects-title">Justice Nest</h3>
                  </div>

                  <a
                    href="images/projects/justicenest.JPG"
                    className="popup-image"
                  >
                    <img
                      src="images/projects/justicenest.JPG"
                      className="projects-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Data Processing</small>

                    <h3 className="projects-title">Cherry Pro</h3>
                  </div>

                  <a
                    href="images/projects/othayalogin.JPG"
                    className="popup-image"
                  >
                    <img
                      src="images/projects/othayalogin.JPG"
                      className="projects-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="projects-thumb">
                  <div className="projects-info">
                    <small className="projects-tag">Mailing & Design</small>

                    <h3 className="projects-title">Auris</h3>
                  </div>

                  <a
                    href="images/projects/aurislogin.JPG"
                    className="popup-image"
                  >
                    <img
                      src="images/projects/aurislogin.JPG"
                      className="projects-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
