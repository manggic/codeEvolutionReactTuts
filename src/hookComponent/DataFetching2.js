import React, { useReducer, useEffect } from "react";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts/";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };

    case "FETCH_ERROR":
      return { loading: false, error: action.payload, post: {} };

    default:
      return currentState;
  }
};

const DataFetching2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`${URL}3`)
      .then((res) => {
        console.log("res", res);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: "Something went Wrong!!!" });
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading...." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetching2;
