import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
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
            
        <div class="login-card2" id="accountLogin">
            <img src="handShakeLogo.png" />
            <div>
              <p class="welcome">Welcome, {user?.displayName}</p>
              <button onClick={handleSignOut} class="logoutBtn">
                Logout
              </button>
            </div>
          
        </div>
        <div class="group-card">
          <div>
            <p class="group">Group 1</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 2</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 3</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 4</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 5</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 6</p>
            <button class="groupBtn">Enter</button>
          </div>
          <div>
            <p class="group">Group 7</p>
            <button class="groupBtn">Enter</button>
          </div>
        </div>
      </div >
    </body1>
  );
};

export default Account;