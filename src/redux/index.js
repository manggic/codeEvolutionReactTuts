const redux = require("redux");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

function buyCake() {
  return {
    type: BUY_CAKE,
    payload: "First Redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    payload: "First Redux action",
  };
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));

// The subscribe method accepts a callback that will fire whenever an action is dispatched.
// Dispatching an action means notifying the store that we intend to change the state.
const unsubscribe = store.subscribe(() => {});
console.log("initialState", store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
console.log("initialState", store.getState());

unsubscribe();
