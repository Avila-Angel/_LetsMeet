import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoApp from '../components/VideoApp';


const Videos = () => {
    
    const navigate = useNavigate();
  
    const goBack = async () => {
      try {
        navigate('/group')
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <button onClick={goBack} className="groupBtn" width="30px">Back</button>
        <VideoApp />
        
      </div>
    )
  }
  
  export default Videos;