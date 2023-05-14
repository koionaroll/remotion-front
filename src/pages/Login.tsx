import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/remotion-logo.jpg";
import { HiArrowRight } from "react-icons/hi";

function Login() {
  const navigate = useNavigate();
 console.log("first")
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] gap-5 
      tablet:h-[calc(100vh-3.75rem)] "
      >
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="w-32 
          tablet:w-48 desktop:w-64"
          />
          <h1
            className="text-secondary text-3xl py-3 
          tablet:text-5xl desktop:text-6xl"
          >
            remotion
          </h1>
        </div>
        <form action="" className="flex flex-col items-center gap-5">
          <input
            type="username"
            placeholder="username"
            className="border bg-bg2 w-56 rounded-full h-7 p-3 text-primary 
            tablet:w-80 tablet:h-10 tablet:text-lg desktop:w-[25rem] desktop:h-12 desktop:text-xl"
          />
          <input
            type="password"
            placeholder="password"
            className="border bg-bg2 w-56 rounded-full h-7 p-3 text-primary 
            tablet:w-80 tablet:h-10 tablet:text-lg desktop:w-[25rem] desktop:h-12 desktop:text-xl"
          />
          <button
            onClick={() => navigate("/schedule")}
            className="bg-bg2 ml-auto w-9 h-9 flex items-center justify-center rounded-full 
            tablet:w-14 tablet:h-14"
          >
            <HiArrowRight
              className="fill-primary bg-bg2 w-6 h-6 
            tablet:w-10 tablet:h-10"
            />
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
