const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const URL = "https://jsonplaceholder.typicode.com/usrs";
const initialState = {
  loading: true,
  error: "",
  users: [],
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());

    axios
      .get(URL)
      .then((res) => {
        //res
        dispatch(fetchUsersSuccess(res.data.map((user) => user.id)));
      })
      .catch((err) => {
        //err
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

const store = redux.createStore(
  reducer,
  redux.applyMiddleware(thunkMiddleware)
);
console.log("initial State", store.getState());

store.subscribe(() => console.log("state", store.getState()));
store.dispatch(fetchUsers());
