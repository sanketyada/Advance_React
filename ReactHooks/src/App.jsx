import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './components/useStateHook'
import UseRefHook from './components/useRef/UseRefHook'
import UseRefDom from './components/useRef/useRefDom'
import UseMemoTest from './components/useMemo/useMemoTest'
import UseCallBack from './components/useCallback/UseCallBack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseStateHook/> */}
    {/* <UseRefHook/>
    <UseRefDom/> */}
    {/* <UseMemoTest/> */}
    <UseCallBack/>

    </>
  )
}

export default App
