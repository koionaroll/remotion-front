import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col'>

    <input type="text" className='border'/>
    <input type="text" className='border'/>
    <button onClick={()=>navigate("/schedule")}>Login</button>
    </div>
    </>
  )
}

export default Login