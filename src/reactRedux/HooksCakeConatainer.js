import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { buyCake } from ".";

const HooksCakeConatainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cake : {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}> buy cake</button>
    </div>
  );
};

export default HooksCakeConatainer;
