import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating documnet ");
    document.title = `Click ${count}`;
  }, [count]);

  // array destructing
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCount}>Click {count}</button>
    </div>
  );
}

export default HookCounter;
