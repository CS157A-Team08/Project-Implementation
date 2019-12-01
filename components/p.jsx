import React, { Component } from "react";
import pic from "./soda.jpg";
class P extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={"soda.jpg"} style={{ width: 50, height: 50 }} src={pic} />
      </div>
    );
  }
}

export default P;
