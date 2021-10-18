import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };

    console.log("LifecycleA constructor");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  componentWillUnmount() {}

  componentDidCatch() {}

  handleClick = () => {
    this.setState((prev) => {
      return {
        ...prev,
        name: "manish",
      };
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        {this.state.name}
        <br />
        LifecycleA <LifeCycleB />{" "}
        <button onClick={this.handleClick}>change State</button>
      </div>
    );
  }
}

export default LifeCycleA;
