import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx"; 
import SignUp from "./components/SignUp.jsx";
import { Route,Routes } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import FooterPage from "./pages/FooterPage.jsx";
import Pro from "./components/Pro.jsx";

library.add(fab);


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/faq" element={<FAQPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/pro" element={<Pro/>}/>
      </Routes>
      <FooterPage/>
    </>
  );
}

export default App;
