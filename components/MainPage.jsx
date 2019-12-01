import React, { Component } from "react";
import Cart from "./Cart";
import Menu from "./Menu";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <React.Fragment>
          <SideBar />
          <Menu />
          <Cart />
        </React.Fragment>
      </div>
    );
  }
}

export default MainPage;
