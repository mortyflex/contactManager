/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 className="display-4">About Contact Manager</h4>

      <p className="lead">simple app to manage contacts easily</p>
      <p className="lead">
        Made with <span role="img">🖤</span> by Mortyflex
      </p>

      <p style={{ float: "right" }} className="text-secondary">
        Version 1.0.0
      </p>
    </div>
  );
};

export default About;
