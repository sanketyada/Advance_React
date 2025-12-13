//Uncontrolled Inputs
// Input state lives inside the DOM, not in React.

import React, { useRef } from 'react'

function UncontrolledForm() {
    const EnteredValue = useRef()

    const saveDataHandler = (e)=>{
       e.preventDefault()
       console.log(EnteredValue)
    }
  return (
    <div>
      <label htmlFor="name">Enter Your Name:</label>
      <input type="text" ref={EnteredValue} id='name'/>
      <p></p>
      <button onClick={saveDataHandler}>SaveData</button>
    </div>
  )
}

export default UncontrolledForm
