import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { Link } from "react-router-dom";

import { Consumer } from "../../context";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { history } = this.props;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is Required!" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is Required!" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required!" } });
      return;
    }

    const updContact = {
      name: name,
      email: email,
      phone: phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    //clear state
    this.setState({ name: "", email: "", phone: "", errors: {} });

    history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div
                style={{ fontSize: "35px", fontWeight: "300" }}
                className="card-header bg-light "
              >
                <span className="text-danger">Update</span> Contact
              </div>

              <div className="card-body">
                <form onSubmit={e => this.onSubmit(dispatch, e)}>
                  <TextInputGroup
                    label="Name:"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email:"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone:"
                    name="phone"
                    placeholder="Enter Phone Number..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    style={{
                      fontSize: "21px",
                      fontWeight: "300",
                      float: "right"
                    }}
                    type="submit"
                    value="UPDATE"
                    className="btn btn-sm btn-primary "
                  />
                  <Link to="/">
                    <input
                      style={{
                        fontSize: "19px",
                        fontWeight: "300",
                        float: "left"
                      }}
                      type="submit"
                      value="CANCEL"
                      className="btn btn-danger btn-md mt-1"
                    />
                  </Link>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
