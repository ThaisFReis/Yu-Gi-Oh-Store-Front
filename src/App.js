import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react"
import { useState } from "react"

// CSS
import './Assets/Styles/App.css';

// Components
import Home from './Components/Home'
import SignUp from './Components/SignUp';
import Login from './Components/Login';

// Context
import { userContext } from './Contexts/userContext';



function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;