import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react"

// CSS
import './Assets/Styles/App.css';

// Pages
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/LogIn';

// Context
import { UserProvider } from './Contexts/userContext';
import { AuthProvider } from './Contexts/authContext';



function App() {

  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;