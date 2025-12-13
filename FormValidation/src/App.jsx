import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from "./components/ControlledForm"
import UncontrolledForm from './components/UncontrolledForm'
import ReactHookForm from './components/ReactHookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ControlledForm/> */}
    {/* <UncontrolledForm/> */}
    <ReactHookForm/>
    </>
  )
}

export default App
