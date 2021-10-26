import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);

  console.log("countContext", countContext);
  const { countState, countDispatch } = countContext;
  return (
    <div>
      ComponentA = {countState}
      <button onClick={() => countDispatch("increment")}>increment</button>
      <button onClick={() => countDispatch("decrement")}>decrement</button>
      <button onClick={() => countDispatch("reset")}>reset</button>
    </div>
  );
};

export default ComponentA;
