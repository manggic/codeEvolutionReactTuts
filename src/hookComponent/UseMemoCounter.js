import React, { useState, useMemo } from "react";

const UseMemoCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prev) => prev + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>one = {counterOne}</button>
        <span>{isEven ? "EVEN" : "ODD"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>two = {counterTwo}</button>
      </div>
    </>
  );
};

export default UseMemoCounter;
