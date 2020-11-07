import React from "react";
import "./Style.css";
import myself1 from "../Images/myself1.jpg";
const Contact = () => {
  return (
    <div>
      <img className="myimage" src={myself1} alt=" " />
      <div className="myname">
        <h2>Mohammed Sayeed</h2>
      </div>
      <div className="contact-section">
        <a href="https://www.linkedin.com/in/sayeedofficial">
          <button className="contactbtn" id="ln">
            <i className="fab fa-linkedin"></i> Linkedin
          </button>
        </a>
        <a href="https://www.github.com/sayeedofficial">
          <button className="contactbtn" id="git">
            <i className="fab fa-github-square"></i> Github
          </button>
        </a>
        <a href="https://t.me/devboysayeed">
          <button className="contactbtn" id="tele">
            <i className="fab fa-telegram"></i> Telegram
          </button>
        </a>
      </div>
    </div>
  );
};
export default Contact;
