import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <SignUp />
    <SearchBar />
    </>
  );
}

export default App;
