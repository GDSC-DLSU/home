import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={message_icon} alt="" />
        </h3>
        <p>Feel free to reach out through blah blah blah....</p>
        <ul>
          <li>gdscemail@dlsu.edu.ph</li>
          <li>+63 000 000 0000</li>
          <li>2401 Taft Ave, Malate, Manila, 1004 Metro Manila</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
