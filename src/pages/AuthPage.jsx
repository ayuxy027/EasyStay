import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, UserPlus, LogIn, Loader2, Github } from 'lucide-react';

function AuthPage({ isSignUp }) {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    reenterPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleAuth = async (method, connection = null) => {
    setIsLoading(true);
    try {
      const authParams = {
        authorizationParams: {
          screen_hint: isSignUp ? 'signup' : 'login',
        },
      };
      if (rememberMe) {
        authParams.authorizationParams.remember = 'true';
      }
      if (method === 'redirect') {
        await loginWithRedirect(authParams);
      } else if (method === 'popup' && connection) {
        await loginWithPopup({ ...authParams, connection });
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-8 w-full max-w-md bg-white rounded-2xl shadow-2xl transition-transform duration-300 transform sm:p-12 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-proj">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-center text-gray-600">
          {isSignUp ? 'Join us today and start your journey!' : 'Sign in to access your account'}
        </p>
        <div className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" size={20} />
            <input
              className="py-3 pr-3 pl-10 w-full text-sm font-medium placeholder-gray-500 bg-gray-100 rounded-lg border-2 border-transparent transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
              type="email" placeholder="Email address" name="email" required
              onChange={handleInputChange}
              value={inputs.email}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" size={20} />
            <input
              className="py-3 pr-10 pl-10 w-full text-sm font-medium placeholder-gray-500 bg-gray-100 rounded-lg border-2 border-transparent transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
              type={showPassword ? "text" : "password"} placeholder="Password" name="password" required
              onChange={handleInputChange}
              value={inputs.password}
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 text-gray-400 transition-colors duration-300 transform -translate-y-1/2 focus:outline-none hover:text-proj" 
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {isSignUp && (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" size={20} />
              <input
                className="py-3 pr-3 pl-10 w-full text-sm font-medium placeholder-gray-500 bg-gray-100 rounded-lg border-2 border-transparent transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-proj focus:border-proj"
                type={showPassword ? "text" : "password"} placeholder="Re-Enter Password" name="reenterPassword" required
                onChange={handleInputChange}
                value={inputs.reenterPassword}
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-proj focus:ring-proj"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium transition-colors duration-300 text-proj hover:text-opacity-80">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              className={`flex items-center justify-center w-full py-3 px-4 font-semibold text-white transition-all duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 transform hover:scale-105 ${
                isFormValid && !isLoading
                  ? "bg-proj hover:bg-opacity-90 focus:ring-proj" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => handleAuth('redirect')}
              disabled={!isFormValid || isLoading}
              title={isFormValid ? "" : "Please fill out all fields correctly"}
            >
              {isLoading ? (
                <Loader2 className="mr-3 -ml-1 w-5 h-5 animate-spin" />
              ) : isSignUp ? (
                <UserPlus className="mr-2 w-5 h-5" />
              ) : (
                <LogIn className="mr-2 w-5 h-5" />
              )}
              <span>{isLoading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}</span>
            </button>
            <div className="w-full text-center">
              <span className="px-2 text-sm text-gray-500 bg-white">Or continue with</span>
              <div className="relative mt-3 border-t border-gray-300">
                <div className="flex absolute inset-x-0 top-0 justify-center">
                  <span className="px-2 text-sm text-gray-500 bg-white">-</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <button 
                className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border-2 border-gray-300 shadow-sm transition duration-300 transform hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj hover:scale-105"
                onClick={() => handleAuth('popup', 'google-oauth2')}
                disabled={isLoading}
              >
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
              </button>
              <button 
                className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border-2 border-gray-300 shadow-sm transition duration-300 transform hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj hover:scale-105"
                onClick={() => handleAuth('popup', 'facebook')}
                disabled={isLoading}
              >
                <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </button>
              <button 
                className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border-2 border-gray-300 shadow-sm transition duration-300 transform hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj hover:scale-105"
                onClick={() => handleAuth('popup', 'github')}
                disabled={isLoading}
              >
                <Github className="mr-2 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">{isSignUp ? 'Already have an account?' : "Don't have an account?"} </span>
            <button
              className="text-sm font-semibold text-transparent bg-clip-text transition-all duration-300 ease-in-out bg-proj focus:outline-none hover:opacity-80"
              onClick={() => navigate(isSignUp ? "/login" : "/signup")}
            >
              {isSignUp ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;