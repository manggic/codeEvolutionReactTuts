import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };

    console.log("LifecycleB constructor");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleB componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifeCycleB;
