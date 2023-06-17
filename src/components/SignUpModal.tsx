import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
function SignUpModal({ isOpen, toggleModal, }) {

  return (
    
    <>
    {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-bg2 p-6 rounded-lg text-center">
            <AiOutlineCloseCircle onClick={toggleModal} className='w-7 h-7 fill-primary bg-bg2 mb-4 hover:cursor-pointer'/>
          <form action="submit" className='bg-bg2'>
            <input type="email" placeholder='Enter Email' className='bg-bg2 text-primary'/>
            <input type="password" placeholder='Enter Password' className='bg-bg2 text-primary'/>
            <input type="password" placeholder='Confirm Password' className='bg-bg2 text-primary'/>
          </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUpModal