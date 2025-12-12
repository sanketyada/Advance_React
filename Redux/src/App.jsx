import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider} from "react-redux"
import store from './redux/store'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
    <Counter/>
    </Provider>
  )
}

export default App
