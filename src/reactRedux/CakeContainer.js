import React from "react";

import { connect } from "react-redux";

import { buyCake } from "../reactRedux";
const CakeContainer = ({ numOfCakes, buyCake }) => {
  console.log("cakes", numOfCakes);
  return (
    <div>
      <h2>Number of Cake : {numOfCakes}</h2>
      <button onClick={buyCake}> buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
