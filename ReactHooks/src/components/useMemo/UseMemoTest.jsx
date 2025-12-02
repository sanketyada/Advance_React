import React, { useMemo, useState } from "react";

function UseMemoTest() {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0)

  function handleCount() {
    setCount((prev) => {
      return prev + 1;
    }); //HAve To use Rerturn VAlue
  }

  function expensiveCal(num) {
    console.log("Inside Expensive Calculation")
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }

  // let doubleValue = expensiveCal(10)
  let doubleValue  = useMemo(expensiveCal,[inputValue]) //now expensiveCalwill not when you click to Count value
   //When you put Something in input box only than expensiveCal will called

  return (
    <div>
      <h1>Doubled Value = {doubleValue}</h1>
      <h1>Count ={count}</h1>
      <button onClick={handleCount}>Count</button>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </div>
  );
}

export default UseMemoTest;
