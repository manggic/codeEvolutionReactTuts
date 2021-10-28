import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());

    axios
      .get(URL)
      .then((res) => {
        //res
        dispatch(fetchUsersSuccess(res.data.map((user) => user)));
      })
      .catch((err) => {
        //err
        dispatch(fetchUsersFailure(err.message));
      });
  };
};
