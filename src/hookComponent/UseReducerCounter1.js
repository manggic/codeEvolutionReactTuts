import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;

    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;

    default:
      return currentState;
  }
};

function UseReducerCounter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count - {count} <br />
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducerCounter1;
