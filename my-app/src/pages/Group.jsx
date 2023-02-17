import React from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarApp from '../CalendarApp';


const Group = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    try {
      navigate('/account')
    } catch (error) {
      console.log(error);
    }
  };

  const goVideo = async () => {
    try {
      navigate('/video')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='body1'>
      <div className="area2" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
            
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="group-card2">
          <div className="calendar">
            <CalendarApp />
          </div>
          
          <br></br>

          <div>
            <span>
              <button onClick={goBack} className="groupBtn">Back</button>
            </span>
            <span>
              <button onClick={goVideo} className="groupBtn">Video Call</button>
            </span>
          </div>

        </div>
      </div >
  </div>
  )
}

export default Group;