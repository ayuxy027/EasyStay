import LoginImage from '../images/Login.png';
import Logo from '../images/Logo.png';

function Login() {
  return (
    <>
      {/* Navbar Code  */}
      <nav class="bg-white border-gray-200 font-body">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} alt="Logo" className="self-center w-auto h-10" />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-black bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[10px]">Login</button>
            <button type="button" class="text-black bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">SignUp</button>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" className='text-black' viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 d dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Get Franschise</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">PRO</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">24/7 Support</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Login Page Starts Here */}
      <div className="flex justify-center min-h-[500px] text-gray-900 bg-gray-100">
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-2xl font-extrabold underline xl:text-3xl font-body decoration-wavy decoration-blue-300 underline-offset-[10px]">
                Sign Up
              </h1>
              <div className="flex-1 w-full mt-8">
                <div className="flex flex-col items-center">
                  <button
                    className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="p-2 bg-white rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4" />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853" />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04" />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335" />
                      </svg>
                    </div>
                    <span className="ml-4">
                      Sign Up with Google
                    </span>
                  </button>
                  <button
                    className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="p-1 bg-white rounded-full">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.35C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.144v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.468 3.622h-3.119V24h6.116c.73 0 1.324-.595 1.324-1.325V1.325C24 .595 23.405 0 22.675 0z" />
                      </svg>
                    </div>
                    <span className="ml-4">
                      Sign Up with Facebook
                    </span>
                  </button>
                </div>
                <div className="my-12 text-center border-b">
                  <div
                    className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                    Or Log in with mail
                  </div>
                </div>

                <div className="max-w-xs mx-auto">
                  <input
                    className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" placeholder="xyz@gmail.com" />
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password" placeholder="Password" />
                  <button
                    className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      Log-in
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
            <div className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
              style={{ backgroundImage: `url(${LoginImage})` }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login