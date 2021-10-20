import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  // array destructing
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>count {count}</button>
    </div>
  );
}

export default HookCounter;
