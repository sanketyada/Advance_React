import React from "react";

let ChildComponent = React.memo((props) => {
  console.log("This is Child Components");
  return (
    <div>
      <button>{props.btnName}</button>
    </div>
  );
});

export default ChildComponent;


