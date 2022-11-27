import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react"

// CSS
import './Assets/Styles/App.css';

// Components
import Home from './Components/Home'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
// Context

import { authContext } from './Contexts/authContext';
import { userContext } from './Contexts/userContext';

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <authContext.Provider value={{ token, setToken }} >
      <userContext.Provider value={{ user, setUser }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </authContext.Provider>
  );
}

export default App;