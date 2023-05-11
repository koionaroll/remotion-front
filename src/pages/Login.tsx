import React,{useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/remotion-logo.jpg";
import { HiArrowRight } from "react-icons/hi";
import { getAuth, createUserWithEmailAndPassword,connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from  "../firebase"

function Login() {

  //connectAuthEmulator(auth,"http://localhost:9099/")
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>()
  const [password,setPWord] = useState<string>()
  
  const handleEmailChange= function(e: React.FormEvent<HTMLInputElement>) {
   setEmail(e.currentTarget.value);
 }
 const handlePasswordChange= function(e: React.FormEvent<HTMLInputElement>) {
    setPWord(e.currentTarget.value);
 }

  const loginEmailPassword =async () => {
    console.log(email)
    console.log(password)
    // try{
    //   await signInWithEmailAndPassword(auth, email!, password!)
    // }
    // catch (err:any) {
    //   console.error(err);
    //   alert(err.message);
    // }
    
  //console.log(userCred.user)
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] gap-5 tablet:h-[calc(100vh-3.75rem)] ">
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-32 tablet:w-48" />
          <h1 className="text-secondary text-3xl py-3 tablet:text-5xl ">remotion</h1>
        </div>
        <form action="" className="flex flex-col items-center gap-5">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            className="border bg-bg2 w-56 rounded-full h-7 p-3 text-primary tablet:w-80 tablet:h-10 tablet:text-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            className="border bg-bg2 w-56 rounded-full h-7 p-3 text-primary tablet:w-80 tablet:h-10 tablet:text-lg"
          />
          <button
            onClick={loginEmailPassword}
            className="bg-bg2 ml-auto w-7 h-7 flex items-center justify-center rounded-full tablet:w-10 tablet:h-10"
          >
            <HiArrowRight className="fill-primary bg-bg2 w-5 h-5 tablet:w-10 tablet:h-10" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
