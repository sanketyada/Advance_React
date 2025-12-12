import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "./features/Counter/CounterSlice";

function App() {
  const [inputChange, setInputChange] = useState();

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleincrement = () => {
    dispatch(increment());
  };
  const handledecrement = () => {
    dispatch(decrement());
  };
  const Resethandler = () => {
    dispatch(reset());
  };
  const SetValue = () => {
    dispatch(incrementByValue(inputChange));
  };
  return (
    <div>
      <button onClick={handleincrement}>+</button>
      <p>{counter}</p>
      <button onClick={handledecrement}>-</button>
      <br />
      <br />
      <button onClick={Resethandler}>Reset Counting</button>
      <br />
      <br />
      <label htmlFor="input">Set Your Counter</label>
      <br />
      <input
        type="text"
        placeholder="Set Your Counter"
        id="input"
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
      />
      <br />
      <br />
      <button onClick={SetValue}>Set</button>
    </div>
  );
}

export default App;
