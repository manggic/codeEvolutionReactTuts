import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
