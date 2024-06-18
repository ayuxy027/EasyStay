import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx"; 
import SignUp from "./components/SignUp.jsx";
import { Route,Routes } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";

function App() {
  return (
    <>
      <NavBar/> 
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
