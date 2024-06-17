import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage.jsx"; 
import SignUp from "./components/SignUp.jsx";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/> 
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
