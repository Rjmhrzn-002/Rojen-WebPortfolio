import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58lho3e",
        "template_rhjbt4n",
        form.current,
        "OivzTV9cFaT1uD6p9"
      )
      .then(e.target.reset());
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Get in touch</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              {/* <div className="contact-card-icon"></div> */}
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">maharjanrj002@gmail.com</span>
              <br />
              <a
                href="mailto:maharjanrj002@gmail.com"
                className="contact-button"
              >
                {" "}
                Send a mail ✍
              </a>
              {/* // another icons */}
            </div>

            <div className="contact-card">
              {/* <div className="contact-card-icon"></div> */}
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+977-9840032790</span>
              <br />
              <a href="https://web.whatsapp.com/" className="contact-button">
                Write me ✍
              </a>
              {/* // another icons */}
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project.</h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form contact-info "
          >
            <div className="contact-form-div ">
              <label htmlFor="" className="contact-form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label htmlFor="" className="contact-form-tag">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your project"
              />
            </div>
            <button className="contact-button button--flex">Send mail</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
