import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { isLoading, contacts } = value;
          return isLoading ? (
            <Fragment>
              <h1 style={{ fontWeight: "300" }} className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>

              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          ) : (
            <div className="d-flex align-items-center mt-5">
              <strong>Loading...</strong>
              <div
                className="spinner-border text-danger ml-auto"
                role="status"
                aria-hidden="true"
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
