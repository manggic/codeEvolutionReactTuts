import React, { Component } from "react";

class RenderPropsCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        {this.props.children
          ? this.props.children(this.state.count, this.incrementCount)
          : this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default RenderPropsCounter;
