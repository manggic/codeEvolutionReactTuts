import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.payload,
      };

    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.payload,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.payload,
      };

    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.payload,
      };
    case "reset":
      return initialState;

    default:
      return currentState;
  }
};

function UseReducerCounter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      First Count : {count.firstCounter} <br />
      Second Count : {count.secondCounter} <br />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        incrementBy5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        decrementBy5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", payload: 1 })}>
          increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", payload: 1 })}>
          decrement Counter 2
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounter2;
