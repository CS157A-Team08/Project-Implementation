import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    //const src = this.props.item.imageURL;
    return (
      <div style={{ display: "inline-block", width: "30%" }}>
        <div>
          <img
            src={this.props.item.imageURL}
            style={{ width: 150, height: 150 }}
          />
        </div>
        <React.Fragment>{this.props.item.name}</React.Fragment>
        <React.Fragment> ${this.props.item.price}</React.Fragment>

        <button
          className="btn btn-secondary btn-sm m-1"
          onClick={() => this.props.onIn(this.props.item)}
        >
          +
        </button>
      </div>
    );
  }
}

export default MenuItem;
