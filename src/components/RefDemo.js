import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); // new Method
    this.cbRef = null; //  old method for Ref

    //  old method for Ref
    this.setCbRef = (ele) => {
      this.cbRef = ele;
    };
  }

  componentDidMount() {
    // old method for Ref
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // this.inputRef.current.focus(); // new Method
    console.log("log", this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" placeholder="Enter name" ref={this.inputRef} /> */}
        <input type="text" placeholder="" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
