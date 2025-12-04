import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function UseCallBack() {
  const [count, setCount] = useState(0);

  let handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  },[]);


  let TestFunction = useCallback(() => {
    // This is Sample Funtion here is useCallBack 
    //It means it run on each count but reference will be same 
    //if Reference be same then Then when it pass in  <ChildComponent btnName={"Sanket Yadav"} func={TestFunction} />
    //props will be not change and React.memo will not re render child component every Time
  },[]);


  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={handleCount}>Count</button>
      <br />
      <br />

      {/* WhenEver You click on Count the ChildComponent rerender every time Which is not importtent  */}
      {/* <ChildComponent/> */}

      {/* If u use React.memo in Child component it will rendrer onece only but you have so send only values like "btnName" */}
      {/* <ChildComponent btnName={"Sanket Yadav"} />  */}

      {/* if you send function name as props child component rerender on each count because fnction referace changes always */}
      {/* means React.memo get faild to stops unwanted re renders  */}
      {/* <ChildComponent btnName={"Sanket Yadav"} func ={handleCount}/> */}

      <ChildComponent btnName={"Sanket Yadav"} func={TestFunction} />
    </div>
  );
}

export default UseCallBack;
