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
              <i className="fas fa-search"></i> Search
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              {" "}
              <i className="fas fa-code"></i> Jobs
            </Link>
          </li>
          <li>
            <Link to="/about">
              {" "}
              <i className="fas fa-info-circle"></i> About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-user"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Geek Hub",
  icon: "fab fa-github  fa-spin",
};
// should give string type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
