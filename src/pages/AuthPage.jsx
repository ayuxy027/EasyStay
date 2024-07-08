import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaSignInAlt, FaGoogle, FaFacebookF } from 'react-icons/fa';

function AuthPage({ isSignUp }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    reenterPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = isSignUp
    ? inputs.email && inputs.password && inputs.password === inputs.reenterPassword
    : inputs.email && inputs.password;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleAuth = () => {
    // TODO: Implement authentication logic
    console.log('Auth action:', isSignUp ? 'Sign Up' : 'Log In');
    console.log('Form data:', inputs);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 transition-transform duration-300 transform bg-white shadow-2xl rounded-2xl sm:p-12 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-proj">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
            <input
              className="w-full py-3 pl-10 pr-3 text-sm font-medium placeholder-gray-500 transition duration-300 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
              type="email" placeholder="Email address" name="email" required
              onChange={handleInputChange}
              value={inputs.email}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
            <input
              className="w-full py-3 pl-10 pr-10 text-sm font-medium placeholder-gray-500 transition duration-300 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
              type={showPassword ? "text" : "password"} placeholder="Password" name="password" required
              onChange={handleInputChange}
              value={inputs.password}
            />
            <button 
              type="button"
              className="absolute text-gray-400 transition-colors duration-300 transform -translate-y-1/2 top-1/2 right-3 focus:outline-none hover:text-proj" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {isSignUp && (
            <div className="relative">
              <FaLock className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
              <input
                className="w-full py-3 pl-10 pr-3 text-sm font-medium placeholder-gray-500 transition duration-300 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
                type={showPassword ? "text" : "password"} placeholder="Re-Enter Password" name="reenterPassword" required
                onChange={handleInputChange}
                value={inputs.reenterPassword}
              />
            </div>
          )}
          <div className="flex flex-col items-center space-y-4">
            <button
              className={`flex items-center justify-center w-full py-3 px-4 font-semibold text-white transition-all duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 transform hover:scale-105 ${
                isFormValid 
                  ? "bg-proj hover:bg-opacity-90 focus:ring-proj" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleAuth}
              disabled={!isFormValid}
              title={isFormValid ? "" : "Please fill out all fields correctly"}
            >
              {isSignUp ? <FaUserPlus className="w-5 h-5 mr-2" /> : <FaSignInAlt className="w-5 h-5 mr-2" />}
              <span>{isSignUp ? 'Sign Up' : 'Log In'}</span>
            </button>
            <div className="w-full text-center">
              <span className="px-2 text-sm text-gray-500 bg-white">Or continue with</span>
              <div className="relative mt-3 border-t border-gray-300">
                <div className="absolute inset-x-0 top-0 flex justify-center">
                  <span className="px-2 text-sm text-gray-500 bg-white">-</span>
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4">
              <button className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 transform bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj hover:scale-105">
                <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 transform bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj hover:scale-105">
                <FaFacebookF className="w-5 h-5 mr-2 text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">{isSignUp ? 'Already have an account?' : "Don't have an account?"} </span>
            <button
              className="text-sm font-semibold text-transparent transition-all duration-300 ease-in-out bg-clip-text bg-proj focus:outline-none hover:opacity-80"
              onClick={() => navigate(isSignUp ? "/login" : "/signup")}
            >
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;