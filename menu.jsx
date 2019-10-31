import React, { Component } from "react";
import Item from "./menuItem";
class Menu extends Component {
  state = {
    items: [
      { id: 0, value: "Water: ", price: 1.0, counter: 0 },
      { id: 1, value: "Coke: ", price: 2.0, counter: 0 },
      { id: 2, value: "Diet Coke: ", price: 3.5, counter: 0 },
      { id: 3, value: "Milk: ", price: 4.0, counter: 0 },
      { id: 4, value: "Beer: ", price: 5.0, counter: 0 },
      { id: 5, value: "Pizza: ", price: 10.0, counter: 0 },
      { id: 6, value: "Apple: ", price: 11.0, counter: 0 },
      { id: 7, value: "Coffee: ", price: 6.0, counter: 0 },
      { id: 8, value: "Steak: ", price: 15.0, counter: 0 },
      { id: 9, value: "Sandwish: ", price: 16.0, counter: 0 },
      { id: 10, value: "Salad: ", price: 25.0, counter: 0 }
    ],
    cart: [],
    total: 0
  };

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIn = this.handleIn.bind(this);
    this.handleDe = this.handleDe.bind(this);
  }

  //  async componentDidMount() {
  //    const url = "http://localhost:1234/p";
  //   const response = await fetch(url);
  //    const data = await response.json();
  //    console.log(data);
  //this.setState({ items: data });
  //  }

  handleIn(item) {
    const temp = [...this.state.items];
    const index = temp.indexOf(item);
    temp[index] = { ...item };
    temp[index].counter++;
    if (temp[index].counter === 1) {
      this.state.cart.push(temp[index]);
    }
    this.setState({ items: temp });
    let i;
    i = this.state.total + 1;
    this.setState({ total: i });
  }
  handleDe(item) {
    const temp = [...this.state.items];
    const index = temp.indexOf(item);
    temp[index] = { ...item };
    temp[index].counter--;
    if (temp[index].counter < 0) {
      temp[index].counter = 0;
    }

    if (temp[index].counter > 0) {
      let i;
      i = this.state.total - 1;
      this.setState({ total: i });
    }
    this.setState({ items: temp });
  }
  handleDelete(itemID) {
    const temp = this.state.items.filter(c => c.id !== itemID);
    // loop thro temp and compute total
    let i = 0;
    temp.map(item => (i = i + item.counter));
    this.setState({ total: i });
    this.setState({ items: temp });
  }
  accTotal() {
    let i = 0;
    this.state.items.map(item => (i = i + item.price * item.counter));
    this.setState({ total: i });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Menu</h3>
          {this.state.items.map(item => (
            <Item
              key={item.id}
              onDelete={this.handleDelete}
              onIn={this.handleIn}
              onDe={this.handleDe}
              item={item}
            ></Item>
          ))}
        </div>
        <div>
          <h3>Number of items: {this.state.total}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
