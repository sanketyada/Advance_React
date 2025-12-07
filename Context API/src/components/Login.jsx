import React, { useState } from 'react'
import { useContext } from 'react'
import RagisterContext from "../contextOne/userContext"
function Login() {
    const [name,setName] = useState("Alex")
    const [username,setUsername] = useState("alex@34")
    const [password,setPassword] = useState(12345)

    const {setUser }=useContext(RagisterContext)
    let handletoSetName =(e)=>{
        e.preventDefault()
        setUser({name,username,password})
    }
  return (
    <div>
      <h1>Login Page</h1>
      <label htmlFor="name">Name</label>sss
      <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <label htmlFor="username">Username</label>
      <input type="text" id='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <br />
      <label htmlFor="pass">Password</label>
      <input type="text" id='pass' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <button onClick={handletoSetName}>Submit</button>
    </div>
  )
}

export default Login
