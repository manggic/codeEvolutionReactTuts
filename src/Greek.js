import React from "react";

class Greek extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { name, age = 30 } = this.props;
    return (
      <h1>
        Hello {name} and his age is {age}
      </h1>
    );
  }
}

// export const Greek = (props) => {
//   return (
//     <div className="App">
//       <h1>Hello {props.name}</h1>
//     </div>
//   );
// };

export default Greek;
