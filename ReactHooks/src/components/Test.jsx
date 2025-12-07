import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function Test() {
  let [color, setColor] = useState("blue");
  const name = useContext(UserContext);
  const handleBackground = useContext(UserContext)

  return (
    <div>
      <h1>Hii My name is {name}</h1>
      <button onClick={handleBackground}>Blue</button>
    </div>
  );
}

export default Test;
