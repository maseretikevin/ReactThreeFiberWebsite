import {
  Center,
  FlyControls,
  Html,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { mediaConstants } from "../../assets/constants/constants.js";
import Footer from "../footer/Footer.jsx";
import { Canvas } from "@react-three/fiber";
import { MyCharacterbkp } from "../transformed/Mycharacterbkp.jsx";

const About = () => {
  return (
    <>
      <main>
        <section className="about section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 sm-12 col-12 mt-5 mt-lg-0">
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
                    . My professional expertise stems from interpersonal
                    experience through making meaningful relationships with
                    others and dedication towards a common cause.
                  </p>

                  <p>
                    For more inquiries, you can reach me through my social media
                    handles
                    <a href="#footer"> 👇 </a>
                    or through the contact page
                    <a href="/contact"> 👉 .</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
                  <OrbitControls />
                  <color attach="background" args={["#dedddf"]} />
                  <Suspense fallback={<Loader />}>
                    <Center>
                      <MyCharacterbkp />
                    </Center>
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </section>

        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Experience</h3>
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Masereti Kevin</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Web Developer with 3+ years
                      of experience developing and providing user support for
                      user-centered web applications from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Nakuru, Kenya</li>
                    <li>+254716611936</li>
                    <li>maseretikevin@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Web Developer</h3>
                <div className="resume-item">
                  <h4>Volunteer- Justice Nest</h4>
                  <h5>NOVEMBER 2024 – TO DATE</h5>
                  <p>
                    <a href="www.justicenest.org">www.justicenest.org</a>
                  </p>
                  <p>
                    I was engaged by the startup to provide an all-round online
                    presence that is typical of an NGO. I fine-tuned myself in
                    areas like:
                  </p>
                  <ul>
                    <li>
                      Communication &amp; Reporting (Responding to updates,
                      Newsletters and different media).
                    </li>
                    <li>
                      Aesthetics (Optimizations for readability and
                      accessibility of online resources through design).
                    </li>
                    <li>
                      Security &amp; Redundancy (Building fail-safe platforms).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="resume-item">
                  <h4>Junior Developer - Alphaset Africa</h4>
                  <h5>DECEMBER 2023 – SEPTEMBER 2024</h5>

                  <p>
                    Working alongside other professionals within the industry
                    imparted on me a better understanding of different
                    approaches within the tech industry towards establishing and
                    optimizing an online ecosystem as a first responder.
                  </p>
                </div>

                <h3 className="resume-title">Other Professional Experiences</h3>
                <div className="resume-item">
                  <h4>Internship - County Government of Nakuru</h4>
                  <h5>FEBRUARY 2022 – OCTOBER 2022</h5>
                  <p>
                    <em>Intern under the 2022 cohort </em>
                  </p>
                  <p>
                    I was privileged to work as an intern under the same
                    department and extend my expertise in tackling a range of IT
                    challenges in the environment of an office setting.
                  </p>
                  <p>Some of my tasks included</p>
                  <ul>
                    <li>Network troubleshooting</li>
                    <li>Basic office operations</li>
                    <li>Hardware and software maintenance</li>
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
                <h3 className="text-center mb-5">
                  Projects I've contributed to
                </h3>
              </div>

              <div className="col-lg-3 col-4 ms-auto clients-item-height">
                <img
                  src="images/logo justice nest.png"
                  className="clients-image img-fluid projects"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height ">
                <img
                  src="images/Caritas.jpeg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height ">
                <img
                  src="images/logo.png"
                  className="clients-image img-fluid projects"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-4 clients-item-height ">
                <img
                  src="images/android-chrome-192x192.png"
                  className="clients-image img-fluid projects"
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

function Avatar() {
  return (
    <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
      <OrbitControls />
      <color attach="background" args={["#dedddf"]} />
      <Suspense fallback={<Loader />}>
        <Center>
          <MyCharacterbkp />
        </Center>
      </Suspense>
    </Canvas>
  );
}

export default About;
