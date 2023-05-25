import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEditModal from "../components/CreateEditModal";
import RoutineList from "../components/RoutineList";
import VideoPlayer from "../components/VideoPlayer";
import logo from "../assets/remotion-logo.jpg";
import { BsPersonCircle } from "react-icons/bs";
import AuthDetails from "../AuthDetails";
import UserModal from "../components/UserModal";

function Routine() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="h-[calc(100vh-3.5rem)]
    tablet:h-[calc(100vh-3.75rem)] text-secondary p-4 flex flex-col"
    >
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-12 tablet:w-16"
        />
        <UserModal isOpen={isOpen} toggleModal={toggleModal}/>
        <button
          onClick={toggleModal}
          className="bg-bg2 ml-auto w-9 h-9 flex items-center justify-center rounded-full 
            tablet:w-14 tablet:h-14"
        >
          <BsPersonCircle
            className="fill-primary bg-bg2 w-6 h-6 
            tablet:w-10 tablet:h-10"
          />
        </button>
      </div>
      <RoutineList />
      <VideoPlayer />
      <button className="bg-secondary w-12 h-4 rounded-full ml-auto"></button>
    </div>
  );
}
export default Routine;
