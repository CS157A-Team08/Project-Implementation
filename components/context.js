import React, { Component } from "react";

const MenuContext = React.createContext();
//Provider
//Consumer

class MenuProvider extends Component {
  state = {
    menuItems: []
  };
  componentDidMount() {
    this.getMenuItems();
  }
  getMenuItems = () => {
    fetch("http://localhost:4000/menu")
      .then(response => response.json())
      .then(response => this.setState({ menuItems: response.data }))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <MenuContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}
const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };
