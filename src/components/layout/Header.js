import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ branding }) => {
  return (
    <Navbar collapseOnSelect bg="danger" expand="md" variant="dark">
      <Navbar.Brand href="/">
        <i className="far fa-2x fa-address-book" /> {branding}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link href="#!">
            <span>
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </span>
          </Nav.Link>
          <Nav.Link href="#!">
            <span>
              <Link to="/about" className="nav-link ">
                <i className="far fa-question-circle" /> About
              </Link>
            </span>
          </Nav.Link>
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
