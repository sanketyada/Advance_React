import React from 'react'
import RagisterContextProvider from './contextOne/RagisterContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <RagisterContextProvider>
      <Login/>
      <Profile/>
    </RagisterContextProvider>
  )
}

export default App
