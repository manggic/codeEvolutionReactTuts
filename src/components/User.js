import React from "react";

function User({ name }) {
  return <div>{name(false)}</div>;
}

export default User;
