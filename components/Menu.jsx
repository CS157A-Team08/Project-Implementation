import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { MenuConsumer } from "./context";

class Menu extends Component {
  constructor() {
    super();

    this.handleIn = this.handleIn.bind(this);
  }

  handleIn(item) {}

  render() {
    return (
      <div style={{ display: "inline-block", width: "65%" }}>
        <React.Fragment>
          <MenuConsumer>
            {value => {
              return value.menuItems.map(item => {
                return (
                  <MenuItem
                    key={item.id}
                    onIn={this.handleIn}
                    item={item}
                  ></MenuItem>
                );
              });
            }}
          </MenuConsumer>
        </React.Fragment>
      </div>
    );
  }
}

export default Menu;
