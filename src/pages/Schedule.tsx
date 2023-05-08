import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../components/Calendar";
import WeeklyTable from "../components/WeeklyTable";
import logo from "../assets/remotion-logo.jpg";

function Schedule() {
  const navigate = useNavigate();

  return (
    <div
      className="h-[calc(100vh-3.5rem)]
      tablet:h-[calc(100vh-3.75rem)] text-secondary p-4"
    >
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-12" />
        <div className="inline tablet:hidden">
        <Calendar />
      </div>
        <img src="" alt="" className="bg-secondary rounded-full w-9 h-9" />
      </div>
      <div className="hidden tablet:inline">
        <Calendar />
      </div>
      <WeeklyTable />
    </div>
  );
}

export default Schedule;
