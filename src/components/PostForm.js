import React, { Component } from "react";
import axios from "axios";
const inputStyle = {
  padding: "10px",
  margin: "2px",
  outline: "none",
};

const submitButton = {
  padding: "8px",
  width: "196px",
  fontSize: "15px",
};
const URL = "https://jsonplaceholder.typicode.com/posts";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post(URL, this.state)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              style={inputStyle}
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
              placeholder="userId"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              placeholder="title"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
              placeholder="body"
            />
          </div>
          <button style={submitButton} type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
