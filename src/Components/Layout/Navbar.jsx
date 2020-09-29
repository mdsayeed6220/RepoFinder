import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              {" "}
              <i className="fas fa-info-circle"></i> About
            </Link>
          </li>
          <li>
            <a href="/contact">
              <i className="fas fa-user"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Repo Finder",
  icon: "fab fa-github fa-spin",
};
// should give string type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
