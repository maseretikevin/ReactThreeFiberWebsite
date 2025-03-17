import { Html } from "@react-three/drei";
import React from "react";
import Nav from "../navigation/Nav";
import { mediaConstants } from "../../assets/constants/constants.js";
import Footer from "../footer/Footer.jsx";

const About = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="about section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                    <h2 className="text-white me-4 mb-0">My Story</h2>

                    <img
                      src={mediaConstants.avatar}
                      className="avatar-image img-fluid"
                      alt=""
                    />
                  </div>

                  <h3 className="pt-2 mb-3">
                    A little bit about Masereti Kevin
                  </h3>

                  <p>
                    I'm a web developer{" "}
                    <a href="https://templatemo.com" target="_blank">
                      TemplateMo
                    </a>
                    . This layout is based on Bootstrap v5.1.3 CSS and JS
                    libraries. Image credits go to{" "}
                    <a href="https://unsplash.com" target="_blank">
                      Unsplash
                    </a>{" "}
                    and{" "}
                    <a href="https://freepik.com" target="_blank">
                      FreePik
                    </a>{" "}
                    for images used in this page.
                  </p>

                  <p>
                    You are allowed to use this template for your websites. You
                    are not allowed to redistribute the template ZIP file on any
                    other website. Please{" "}
                    <a href="https://templatemo.com/contact" target="_blank">
                      contact us
                    </a>{" "}
                    for more info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured section-padding">
          <div class="container">
            <div class="row">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Experience</h3>
              </div>
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                  <h4>Alex Smith</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                </div>
                <div class="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis Eius vel ratione eius unde vitae
                    rerum voluptates asperiores voluptatem Earum molestiae
                    consequatur neque etlon sader mart dila
                  </p>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY </em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clients section-padding" style={{ paddingTop: 50 }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Projects I've worked</h3>
              </div>

              <div className="col-lg-3 col-4 ms-auto clients-item-height">
                <img
                  src="images/logo justice nest.png"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height">
                <img
                  src="images/Caritas.jpeg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height">
                <img
                  src="images/logo.png"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height">
                <img
                  src="images/android-chrome-192x192.png"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Education</h2>
                </div>

                <div className="row pt-lg-5">
                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Non- Credit Certification</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">
                            FEBRUARY 2020
                          </p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        I completed the online non-credit course offered through
                        Coursera by the University of Illinois in partnership
                        with Ajira digital
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-globe"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">CCNA CERTIFICATIONS</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">2018-2020</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        I was awarded a certificate for successfully completing
                        the second module for the CCNA networking course.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-lightbulb"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">BACHELORS DEGREE</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">
                            SEPTEMBER 2015 - NOVEMBER 2019
                          </p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        I was awarded a certificate for completing a four-year
                        Bachelor’s degree course in Information Technology.
                      </p>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-phone"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">SECONDARY EDUCATION</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">2014</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>I completed my secondary school studies</p>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-google"></i>
                      </div>
                    </div>
                  </div>
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

export default About;
