import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { email, phone, name, id } = this.props.contact;

    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4
                onClick={() =>
                  this.setState({ showContactInfo: !showContactInfo })
                }
              >
                {name}
                &nbsp;
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({ showContactInfo: !showContactInfo })
                  }
                  className={
                    !showContactInfo
                      ? "far fa-xs fa-caret-square-down"
                      : "far fa-xs fa-caret-square-up"
                  }
                />
                &nbsp;
                <i
                  onClick={() => this.onDeleteClick(id, dispatch)}
                  style={{
                    cursor: "pointer",
                    float: "right"
                  }}
                  className=" fas fa-xs fa-trash-alt text-danger"
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    style={{
                      cursor: "pointer",
                      float: "right"
                    }}
                    className="fas fa-xs fa-pencil-alt mr-2"
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Email:</strong>
                    &nbsp;
                    {email}
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong>
                    &nbsp;
                    {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
