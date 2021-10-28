const redux = require("redux");
const BUY_CAKE = "BUY_CAKE";

const initialState = {
  numOfCake: 10,
};

const action = {
  type: BUY_CAKE,
  payload: "First Redux action",
};

function buyCake() {
  return action;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

// The subscribe method accepts a callback that will fire whenever an action is dispatched.
// Dispatching an action means notifying the store that we intend to change the state.
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
console.log("initialState", store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("initialState", store.getState());

unsubscribe();
