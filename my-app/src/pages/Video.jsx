import React from 'react';
import { useNavigate } from 'react-router-dom';

const Video = () => {
    const navigate = useNavigate();
  
    const goBack = async () => {
      try {
        navigate('/group')
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
  
  export default Video;