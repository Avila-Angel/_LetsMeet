import React from 'react';
import { useNavigate } from 'react-router-dom';


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
    <body1>
      <div class="area" >
                        <ul class="circles">
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
            
      </div >
      <div>
              <button onClick={goBack} class="logoutBtn" width="30px">Back</button>
              <button onClick={goVideo} class="logoutBtn" width="30px">Video Call</button>
            </div>
    </body1>
  )
}

export default Group;