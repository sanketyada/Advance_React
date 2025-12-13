// Controlled Inputs

// Definition:
// The form input value is fully managed by React state (useState, Redux, etc.)

import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const handleShowData = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(userName);
  };
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p></p>
      <label htmlFor="username">UserName: </label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p></p>
      <button onClick={handleShowData}>Show Data</button>
    </div>
  );
}

export default ControlledForm;
