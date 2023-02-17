import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const goToGroup = async () => {
    try {
      navigate('/group')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='body1'>
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
            
        <div className="login-card2" id="accountLogin">
            <img src="handShakeLogo.png" alt="logo" />
            <div>
              <p className="welcome">Welcome, {user?.displayName}</p>
              <button onClick={handleSignOut} className="logoutBtn">
                Logout
              </button>
            </div>
          
        </div>
        <div className="group-card">
          <div>
            <p className="group">Group 1</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 2</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 3</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 4</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 5</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 6</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
          <div>
            <p className="group">Group 7</p>
            <button onClick={goToGroup} className="groupBtn">Enter</button>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Account;