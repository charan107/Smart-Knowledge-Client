import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import AuthContainer from './Components/AuthContainer';
import LandingPage from './Pages/LandingPage';
import Login from './styles/login';
function App() {
  
  return (
    <>
      <LandingPage/>
      <Login />
    </>
  );
}
export default App;
