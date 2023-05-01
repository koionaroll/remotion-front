import React from 'react'
import {useNavigate} from 'react-router-dom'
import CreateEditModal from '../components/CreateEditModal';
import RoutineList from '../components/RoutineList';
import VideoPlayer from '../components/VideoPlayer';

function Routine() {
  const navigate = useNavigate();

  return (
    <>
    <div>Routine</div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    <RoutineList/>
    <VideoPlayer/>
    <CreateEditModal/>
    </>

  )
}
export default Routine
