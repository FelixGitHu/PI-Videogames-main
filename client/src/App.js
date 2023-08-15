import './App.css';
import { Routes,Route, useLocation, useNavigate,} from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { useState, useEffect,} from "react";
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login'
import LandingPage from './components/LandingPAge/LandingPage';
import CreateForm from './components/CreateForm/CreateForm';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
const location = useLocation();
const navigate = useNavigate();
const [access, setAccess] =useState(false);

  function logout() {
  setAccess(false);
  }
  function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/user/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate('/Landing');
      });
  }
  useEffect(() => {!access && navigate("/");
 }, [access]);
  return (
    <div className="App">
      {(location.pathname !== "/" && location.pathname !== "/Landing") && (<Nav out={logout}/>)}
      <Routes>
        <Route path='/' element={<Login login={login}/>}/>
        <Route path='/Landing'element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createVideosgame' element={<CreateForm/>}/>
        <Route path='*' element={<div  className="gameOver" > Game over Yeah!!!</div>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
