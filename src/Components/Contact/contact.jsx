import React from "react";
import "./Style.css";

const contact = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact Through Below</h1>
      <div className="middle">
        <a
          className="buttonContact"
          href="https://www.facebook.com/mohammed.sayeed.1276487/"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="buttonContact" href="https://twitter.com/mdsayeed6220">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="buttonContact" href="https://t.me/devboysayeed">
          <i className="fab fa-telegram"></i>
        </a>
        <a
          className="buttonContact"
          href="https://www.github.com/sayeedofficial"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="buttonContact"
          href="https://www.linkedin.com/in/sayeedofficial/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p> </p>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default contact;
