import React from "react";

import { connect } from "react-redux";
import { buyIceCream } from ".";

const IceCreamContainer = ({ numOfIceCream, buyIceCream }) => {
  console.log("cakes", numOfIceCream);
  return (
    <div>
      <h2>Number of IceCream : {numOfIceCream}</h2>
      <button onClick={buyIceCream}> buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    numOfIceCream: state?.iceCream?.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
