// useCallback

import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
const Parent = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  );
};

export default Parent;
