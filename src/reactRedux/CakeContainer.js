import React, { useState } from "react";

import { connect } from "react-redux";

import { buyCake } from "../reactRedux";
import ItemContainer from "./ItemContainer";
const CakeContainer = ({ numOfCakes, buyCake }) => {
  const [number, setNumber] = useState(1);

  console.log("cakes", numOfCakes);
  return (
    <div>
      <h2>Number of Cake : {numOfCakes}</h2>
      <button onClick={() => buyCake(number)}> buy {number} cake</button>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state?.cake?.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
