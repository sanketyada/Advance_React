import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
    //Take Referance From 
    //https://chatgpt.com/c/693e9759-e78c-8323-b2e7-b0f39e0d09ff
  )
}

export default App
