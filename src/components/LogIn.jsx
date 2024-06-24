import React from 'react';
import AuthPage from '../pages/AuthPage';
import NavBar from './NavBar';

function LogIn() {
  return (
    <>
    <NavBar />
    <AuthPage isSignUp={false} />;
    </>
  )
}

export default LogIn;
