import React, { useState } from 'react'
import UserContext from './userContext'


function ContextProvider({children}) {
    let [count,setCount] = useState(0)
    
    let handleCounter = ()=>{
        setCount((prev)=>prev+1);
    }
  return (
    <UserContext.Provider value={{count,handleCounter}}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
