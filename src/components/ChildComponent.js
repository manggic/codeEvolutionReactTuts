import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { greetParent } = this.props;
    return (
      <div>
        <button onClick={greetParent}>Greet parent</button>
      </div>
    );
  }
}

export default ChildComponent;
