import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert(this.state);
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>comments</label>
            <textarea
              value={comments}
              name="comments"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>topic</label>
            <select value={topic} name="topic" onChange={this.handleChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
