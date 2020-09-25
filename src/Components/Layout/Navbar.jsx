import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
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
