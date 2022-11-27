import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react"
import { useState } from "react"

// CSS
import './Assets/Styles/App.css';

// Pages
import Home from './Pages/Home';
import SingUp from './Pages/SingUp';

// Context
import { userContext } from './Contexts/userContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;