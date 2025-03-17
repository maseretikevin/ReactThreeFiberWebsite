import { Html } from "@react-three/drei";
import emailjs from "@emailjs/browser";
import React from "react";
import Nav from "../navigation/Nav";
import Footer from "../footer/Footer";
import Social from "../Social";

const SERVICE_ID = "service_siieegk";
const TEMPLATE_ID = "template_ee1ds7i";
const PUBLIC_KEY = "wcyCnhogM1_ZoCzQ-";
const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message sent succssfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong");
      }
    );
    e.target.reset();
  };
  return (
    <>
      <Nav />
      <main>
        <section class="contact section-padding" id="section_5">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-12">
                <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                    class="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 class="text-white ms-4 mb-0">Say Hi</h2>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div class="contact-info contact-info-border-start d-flex flex-column">
                  <strong class="site-footer-title d-block mt-4 mb-3">
                    Stay connected
                  </strong>

                  <Social />

                  <strong class="site-footer-title d-block mt-4 mb-3">
                    Start a project
                  </strong>

                  <p class="mb-0">I’m available for freelance projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div class="contact-info d-flex flex-column">
                  <strong class="site-footer-title d-block mt-4 mb-3">
                    Email
                  </strong>

                  <p>
                    <a href="mailto:maseretikevin@gmail.com">
                      maseretikevin@gmail.com
                    </a>
                  </p>

                  <strong class="site-footer-title d-block mt-4 mb-3">
                    Call
                  </strong>

                  <p class="mb-0">
                    <a href="tel: +254716611936">+254716611936</a>
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                <form
                  class="custom-form contact-form"
                  onSubmit={handleOnSubmit}
                >
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          name="from_name"
                          id="name"
                          class="form-control"
                          placeholder="Name"
                          required=""
                        />

                        <label for="from_name">Name</label>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-floating">
                        <input
                          type="email"
                          name="from_email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          class="form-control"
                          placeholder="Email address"
                          required=""
                        />

                        <label for="from_email">Email address</label>
                      </div>
                    </div>

                    <div class="col-lg-12 col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell me about the project"
                        ></textarea>

                        <label for="message">Tell me more</label>
                      </div>
                    </div>

                    <div class="col-lg-3 col-12 ms-auto">
                      <button type="submit" class="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
