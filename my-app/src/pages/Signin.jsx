
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
        <div className='body1'>
            <div className="context">
                
            </div>
        
        
            <div className="area" >
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
                        <div className="login-card">
                            <h2>Welcome to LetsMeet</h2>
                            <img
                            src="handShakeLogo.png" alt="logo"
                            />
                            <h2>Login</h2>
                            <h3>Enter your credentials</h3>
                            <div id="google">
                                <GoogleButton onClick={handleGoogleSignIn}/>
                            </div>
                           
                        </div>
            </div >

        </div>
  );
};

export default Signin;