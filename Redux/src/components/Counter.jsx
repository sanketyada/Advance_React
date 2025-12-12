import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrememt, reset } from "../redux/CounterSlice";
import {incrememtByValue} from "../redux/CounterSlice"
function Counter() {
  const [inputChange, setInputChange] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let handleIncrement = () => {
    dispatch(incrememt());
  };
  let handleDecrement = () => {
    dispatch(decrement());
  };
  let HandleReset = () => {
    dispatch(reset());
  };
  let handleSet = ()=>{
    dispatch(incrememtByValue(Number(inputChange)))
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <p></p>
      <button onClick={HandleReset}>ReSet</button>
      <p>Set Your Counter</p>
      <input
        type="text"
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
      />
      <p></p>
      <button onClick={handleSet}>Set</button>
    </div>
  );
}

export default Counter;
