import React from 'react'
import {useNavigate} from 'react-router-dom'
import Calendar from '../components/Calendar';
import WeeklyTable from '../components/WeeklyTable';

function Schedule() {
  const navigate = useNavigate();

  return (
    <>
    <div>Schedule</div>
    <button onClick={()=>navigate("/routine")}>View Routine!</button>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    <Calendar/>
    <WeeklyTable/>
    </>
  )
}

export default Schedule