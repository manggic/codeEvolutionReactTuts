import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "manish",
    };

    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      },
      () => {
        console.log("callback", this.state);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increment}>click</button>
      </div>
    );
  }
}

export default Counter;
