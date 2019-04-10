import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="display-4">
        {" "}
        <span className="text-danger">404</span> Page Not Found!
      </h1>
      <i className="fas fa-10x fa-exclamation-triangle mb-3" />

      <p className="lead">Sorry, that page does not exist</p>
    </div>
  );
};

export default NotFound;
