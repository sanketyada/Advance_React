import React, { useRef } from 'react'

function UseRefHook() {
  const myRef = useRef();

  const showValue = () => {
    console.log("Input value:",myRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={showValue}>Show Input Value</button>
    </div>
  );
}

export default UseRefHook;
