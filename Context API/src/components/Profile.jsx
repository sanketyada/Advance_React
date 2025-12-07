import React from "react";
import { useContext } from "react";
import RagisterContext from "../contextOne/userContext";
function Profile() {
  let { user } = useContext(RagisterContext);
  
  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <p>{user.username}</p>
          <p>{user.password}</p>
        </div>
      ) : (
        <p>Please login First</p>
      )}
    </div>
  );
}

export default Profile;
