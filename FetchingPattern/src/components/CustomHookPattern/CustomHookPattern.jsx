import React, { useState } from "react";
import useFetch from "./FetchHook";

function CustomHookPattern() {
  let {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  // console.log(users, loading, error);

  return (
    <div>
      {users.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
}

export default CustomHookPattern;
