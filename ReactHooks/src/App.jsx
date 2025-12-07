import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateHook from "./components/useStateHook";
import UseRefHook from "./components/useRef/UseRefHook";
import UseRefDom from "./components/useRef/useRefDom";
import UseMemoTest from "./components/useMemo/useMemoTest";
import UseCallBack from "./components/useCallback/UseCallBack";
import useCurrencyInfo from "./components/customHook/useCurrencyInfo";
import Test from "./components/Test";

function App() {
  const [eachCurrencey, setEachCurrency] = useState([]);
  const [count, setCount] = useState(0);
  const detail = useCurrencyInfo("usd");

  // useEffect(() => {
  //   if (!detail) return;

  //   const arr = Object.entries(detail).map(([key, value]) => ({
  //     symbol: key,
  //     amount: value,
  //   }));

  //   setEachCurrency(arr);
  // }, [detail]);
  // eachCurrencey.map((value) => console.log(value));
  return (
    <>
      {/* <UseStateHook/> */}
      {/* <UseRefHook/>
    <UseRefDom/> */}
      {/* <UseMemoTest/> */}
      {/* <UseCallBack/> */}
      {/* {eachCurrencey.map((value) => (
        <div>
          <p><b>{value.symbol}</b>:{value.amount}</p>
        </div>
      ))} */}
      <Test/>
    </>
  );
}

export default App;
