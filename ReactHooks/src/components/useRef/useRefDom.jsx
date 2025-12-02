import React, { useRef } from "react";

export default function useRefDom(){
    let countRef = useRef(0)
     
    let handleHeading = ()=>{
        countRef.current += 1;
        console.log("Count",countRef)
    }
    return(
        <>
        {/* <h1 ref={countRef}>My Componets</h1> */}
        <button onClick={handleHeading}>Change Color</button>
        </>
    )
}