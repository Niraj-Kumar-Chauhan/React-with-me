import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const submithandle = () => {
        setUser({username, password})
    }
  return (
    <div>
        <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
         />
        <button onClick={submithandle}>submit</button>
    </div>
  )
}

export default Login