import React from "react";
import { UserContext } from "./userContext";

function UserContextProvider({ children }) {
  const name = "Jhon Doe"; 
  let handleBackground = () => {
    document.body.style.color = "blue";
  };
  return <UserContext.Provider value={name} handleBackground={handleBackground} >
    {children}
    </UserContext.Provider>;
}

export default UserContextProvider;
