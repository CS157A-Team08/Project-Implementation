import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: "absolute", left: "40%", top: "40%" }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="email" placeholder="(xxx)-xxx-xxxx" />
          </Form.Group>
        </Form>
        <Link to="/main">
          <button type="button" class="btn btn-outline-primary btn-lg">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
