import React, { useState } from 'react'

function UseStateHook() {
    let [count ,setCount] = useState(0)
    

  return (
    <div>
      
      <h1>{count}</h1>
      <button onClick={()=>{if(count<20)(setCount((prev)=>prev+1))}}>Count</button>
    </div>
  )
}

export default UseStateHook
