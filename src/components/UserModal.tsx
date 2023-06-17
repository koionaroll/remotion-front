import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

function UserModal({ isOpen, toggleModal, setAuthUser, authUser }) {
    const navigate = useNavigate()

    const handleClick = () =>{
        setAuthUser(null)
        toggleModal
        navigate("/")
    }
  return (
    
    <>
    {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-bg2 p-6 rounded-lg text-center">
            <AiOutlineCloseCircle onClick={toggleModal} className='w-7 h-7 fill-primary bg-bg2 mb-4 hover:cursor-pointer'/>
            <h2 className="text-primary bg-bg2 mb-4">
            {authUser ? <>{`Signed in as: ${authUser.email}`}</>:null}
            </h2>
            <h2 className="text-primary bg-bg2 text-lg hover:cursor-pointer hover:underline" onClick={()=>handleClick()}>
                Click here to log out
            </h2>
          </div>
        </div>
      )}
    </>
  )
}

export default UserModal