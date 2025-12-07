import React, { useState } from 'react'
import RagisterContext from './userContext';


function RagisterContextProvider({children}) {
    const [user,setUser] = useState("");
  return (
    <RagisterContext.Provider value={{user,setUser}}>
      {children}
    </RagisterContext.Provider>
  )
}

export default RagisterContextProvider
