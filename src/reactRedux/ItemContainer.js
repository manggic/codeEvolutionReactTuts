import React from "react";

import { connect } from "react-redux";
import { buyCake, buyIceCream } from ".";

const ItemContainer = ({ item, buyItem }) => {
  console.log("item", item);
  return (
    <div>
      <h2>item - {item} </h2>
      <button onClick={buyItem}>Buy item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(" ItemContainer state", state, ownProps);

  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  console.log("itemState", itemState);

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// when we use only mapDispatchToProps in our project
// export default connect(null, mapDispatchToProps)(ItemContainer);
