import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react"
import { useState } from "react"

// CSS
import './Assets/Styles/App.css';

// Pages
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/LogIn';

// Context
import userContext from './Contexts/userContext';



function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;