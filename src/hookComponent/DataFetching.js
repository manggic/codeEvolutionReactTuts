import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/";
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  const [idFromButtonClicked, setIdFromButtonClicked] = useState(1);

  useEffect(() => {
    axios
      .get(`${URL}${id}`)
      .then((res) => {
        console.log("res", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [idFromButtonClicked]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={() => setIdFromButtonClicked(id)}>
        Fetch Data
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;
