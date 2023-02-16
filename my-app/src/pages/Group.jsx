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
              <button onClick={goBack} class="logoutBtn">
              Back
              </button>
            </div>
    </body1>
  )
}

export default Group;