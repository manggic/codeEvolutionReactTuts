import React, { useState } from "react";

const inputStyle = {
  padding: "10px",
  margin: "2px",
  outline: "none",
};
function HookCounterThree() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <form>
        <input
          style={inputStyle}
          type="text"
          placeholder="firstName"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <span>FirstName: {name.firstName}</span>

        <br />
        <input
          style={inputStyle}
          type="text"
          placeholder="lastName"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <span>LastName: {name.lastName}</span>
      </form>
      <br />
      <br />
      <br />
      <div>Name : {JSON.stringify(name)}</div>
    </div>
  );
}

export default HookCounterThree;
