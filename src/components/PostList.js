import React, { Component } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then((res) => {
        console.log("res", res);

        this.setState((prev) => {
          return {
            ...prev,
            posts: res.data,
          };
        });
      })
      .catch((err) => {
        console.log("err", err);
        this.setState((prev) => {
          return {
            ...prev,
            errorMsg: "Error fetching the data",
          };
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        {errorMsg && <div>errorMsg</div>}
        {posts?.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    );
  }
}

export default PostList;
