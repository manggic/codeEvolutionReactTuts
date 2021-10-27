import React, { useEffect, useState, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <div>{timer}</div>{" "}
      <button onClick={() => clearInterval(intervalRef.current)}>click</button>
    </div>
  );
};

export default HookTimer;
