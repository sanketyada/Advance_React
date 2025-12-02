import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function UseCallBack() {
  const [count,setCount] = useState(0)
  let handleCount = ()=>{
    setCount((prev)=>prev+1)
  }

  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={handleCount}>Count</button>
      <br /><br />
      <ChildComponent name={"Sanket Yadav"}/>
    </div>
  )
}

export default UseCallBack
