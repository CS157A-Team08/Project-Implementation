import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./icon.png";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <img
          src={logo}
          alt="store"
          calssName="navbar-brand"
          style={{ width: 40, height: 40 }}
        />
        <ul className="navbar-nav align-items-center">
          <li classNAme="nav-item ml-10">
            <Link to="/main" className="nav-link">
              <h3>Menu</h3>
            </Link>
          </li>
          <li className="ml-auto">
            <button className="btn btn-primary btn-lg">staff login</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
