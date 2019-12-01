import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: "absolute", left: "40%", top: "40%" }}>
        <h1>Welcome to..</h1>
        <Link to="/login">
          <button
            href="./components/login"
            type="button"
            class="btn btn-outline-primary btn-lg"
          >
            Start Order
          </button>
        </Link>
      </div>
    );
  }
}

export default WelPage;
