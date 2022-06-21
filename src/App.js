import LoginForm from './components/LoginForm';
import users from './database';
import Main from './components/Main';
import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = ({ name, password }) => {
    const user = users.filter(user => user.name === name)[0];

    if (user.name === name && user.password === password) {
      console.log("logged in")
      setIsLoggedIn(true)
    } else {
      console.log("details dont match");
    }
  }

  const Logout = () => {
    setIsLoggedIn(false)
    console.log("Logged out")
  }

  return (
    <Container
      maxWidth="sm"
    >

      <div className="App">
        <Routes>
          <Route path="*" element={!isLoggedIn && <Navigate replace to="/login" />} />
          <Route exact path="/main" element={isLoggedIn ? <Main Logout={Logout} /> : <Navigate replace to="/login" />} />
          <Route exact path="/login" element={!isLoggedIn ? <LoginForm Login={Login} /> : <Navigate replace to="/main" />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;