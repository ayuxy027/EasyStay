import React from 'react'

function Pro() {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-proj sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Choose the best plan that suits your hotel listing needs.</p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <div className="overflow-hidden transition-transform transform bg-white border-2 border-gray-100 rounded-md hover:scale-105">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">Standard</h3>
                <p className="text-5xl font-bold text-black mt-7">Free</p>
                <p className="mt-3 text-base text-gray-600">Basic listing</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> 1 Hotel Listing </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Basic Support </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Limited Access to Features </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Basic Analytics </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Email Support </span>
                  </li>
                </ul>

                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-3xl bg-proj hover:bg-blue-700 focus:bg-blue-700" role="button"> Get Started </a>
              </div>
            </div>

            <div className="relative overflow-hidden transition-transform transform bg-white border-2 border-gray-100 rounded-md shadow-lg hover:scale-105">
              <div className="relative z-10 p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">Professional</h3>
                <p className="text-5xl font-bold text-black mt-7">₹349</p>
                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> 5 Hotel Listings </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Advanced Support </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Full Access to Features </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Advanced Analytics </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Priority Email Support </span>
                  </li>
                </ul>

                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-3xl bg-proj hover:bg-blue-700 focus:bg-blue-700" role="button"> Choose Plan </a>
              </div>
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 rounded-full blur-xl"></div>
              </div>
            </div>

            <div className="overflow-hidden transition-transform transform bg-white border-2 border-gray-100 rounded-md hover:scale-105">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">Enterprise</h3>
                <p className="text-5xl font-bold text-black mt-7">₹599</p>
                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Unlimited Hotel Listings </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Premium Support </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Full Access to Features </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium text-gray-900"> Advanced Analytics </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> 24/7 Premium Support </span>
                  </li>
                </ul>

                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-3xl bg-proj hover:bg-blue-700 focus:bg-blue-700" role="button"> Choose Plan </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pro
