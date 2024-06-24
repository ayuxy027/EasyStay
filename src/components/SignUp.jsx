import React from 'react';
import AuthPage from '../pages/AuthPage';
import NavBar from './NavBar';

function SignUp() {
  return (
    <>
   <NavBar />
   <AuthPage isSignUp={true} />;
   </>
  )
}

export default SignUp;
