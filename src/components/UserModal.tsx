import React from 'react'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../firebase"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

function UserModal({ isOpen, toggleModal }) {
    const navigate = useNavigate()

    const [authUser, setAuthUser] = useState(null)
    
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
    },[])
    const handleClick = () =>{
        setAuthUser(null)
        toggleModal
        navigate("/")
    }
  return (
    
    <>
    {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-bg2 p-6 rounded-lg text-center">
            <AiOutlineCloseCircle onClick={toggleModal} className='w-7 h-7 fill-primary bg-bg2 mb-4'/>
            <h2 className="text-primary bg-bg2 mb-4">
            {authUser ? <>{`signed in as: ${authUser.email}`}</>:null}
            </h2>
            <h2 className="text-primary bg-bg2" onClick={()=>handleClick()}>
                Log out
            </h2>
          </div>
        </div>
      )}
    </>
  )
}

export default UserModal