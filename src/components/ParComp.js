import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ name: "vishwas" }), 2000);
  }

  render() {
    console.log("***parent Component**");
    return (
      <div>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParComp;
