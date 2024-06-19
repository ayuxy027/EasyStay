import React from 'react';

function Hero() {
    return (
        <>
            <div className="relative bg-gray-50">
                <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                    <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
                </div>
                <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                            <div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-4xl font-bold leading-tight text-transparent text-gray-900 bg-gradient-to-r from-rose-700 to-amber-500 bg-clip-text sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">India’s Leading Budget Hotels Chain</h1>
                                    <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Enjoy a perfect vacation at any holiday destination with our affordable and flexible hourly hotels.</p>
                                    <form className="mt-8 sm:mt-10">
                                        <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                            <input
                                                type="email"
                                                placeholder="Enter email address"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                                required
                                            />
                                            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                                <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">500+</p>
                                        <p className="ml-3 text-sm text-gray-900 font-pj">Hotels<br />Worldwide</p>
                                    </div>
                                    <div className="hidden sm:block">
                                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">10K+</p>
                                        <p className="ml-3 text-sm text-gray-900 font-pj">Rooms<br />Available</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <img className="w-full" src="https://d33wubrfki0l68.cloudfront.net/a78a55b3add0dc26d3587d02ecc23bebc28bf5f8/67091/images/hero/5.2/illustration.png" alt="" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;