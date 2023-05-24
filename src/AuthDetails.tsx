import React, {useEffect, useState} from 'react'
import { auth } from "./firebase"
import { onAuthStateChanged } from '@firebase/auth'


function AuthDetails() {
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

    console.log(authUser)

  return (
    <div>
        {authUser ? <>{`signed in as ${authUser.email}`}</>:null}
    </div>
  )
}

export default AuthDetails