import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Group from './pages/Group';
import Signin from './pages/Signin';
import Videos from './pages/Videos';
import VideoApp from './components/VideoApp';

function App() {
  return (
    <div>
      <AuthContextProvider>    
        <Routes>
          <Route path='/' element={<Signin />} />
          
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path='/group' element={<Group />} />
          <Route path='/video' element={<Videos />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;