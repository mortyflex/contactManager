import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ branding }) => {
  return (
    <Navbar bg="danger" expand="md" variant="dark">
      <Navbar.Brand href="/">
        <i className="far fa-2x fa-address-book" /> {branding}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Link to="/" className="nav-link">
            <i className="fas fa-home" /> Home
          </Link>
          <Link to="/about" className="nav-link">
            <i className="far fa-question-circle" /> About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
