
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Group from './pages/Group';
import Signin from './pages/Signin';
import Video from './pages/Video';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
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
          <Route path='/video' element={<Video />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;