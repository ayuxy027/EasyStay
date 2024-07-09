import React, { useState, useEffect, useCallback } from 'react';
import '../components/css/cursor.css';

function Hero() {
    const dynamicWords = ["Affordable", "Premium", "Luxurious"];
    const [dynamicText, setDynamicText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleTyping = useCallback(() => {
        const currentWord = dynamicWords[wordIndex];
        const shouldDelete = isDeleting && dynamicText === '';
        const shouldChangeWord = !isDeleting && dynamicText === currentWord;

        if (shouldDelete) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
        } else if (shouldChangeWord) {
            setIsDeleting(true);
        } else {
            setDynamicText(prevText =>
                isDeleting ? currentWord.slice(0, prevText.length - 1) : currentWord.slice(0, prevText.length + 1)
            );
        }
    }, [dynamicText, isDeleting, wordIndex, dynamicWords]);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleTyping();
        }, isDeleting ? 150 : 250);

        return () => clearTimeout(timer);
    }, [handleTyping, isDeleting]);

    return (
        <section className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white sm:py-16 lg:py-20">
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute right-0 w-1/2 h-full text-gray-100 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <svg className="absolute left-0 w-1/4 h-full transform -translate-x-1/2 text-blue-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <circle cx="50" cy="50" r="50" />
                </svg>
                <svg className="absolute top-0 w-1/4 left-1/4 h-1/4 text-yellow-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="0,0 100,0 50,100" />
                </svg>
            </div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold leading-tight text-transparent bg-proj bg-clip-text sm:text-4xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
                        India's Leading <br />
                        <span className="text-transparent bg-proj-hover bg-clip-text">
                            {dynamicText}
                            <span className="cursor" aria-hidden="true"></span>
                        </span>
                        <br />
                        <span className="text-transparent bg-proj bg-clip-text">Hotels Chain</span>
                    </h1>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 sm:mt-6 font-inter lg:mx-0">
                        Enjoy a perfect vacation at any holiday destination with our affordable and
                        flexible hourly hotels.
                    </p>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className="relative w-3/4 max-w-xs px-4 py-2 text-base font-semibold text-white transition-all duration-500 ease-in-out transform rounded-md shadow-lg sm:px-6 md:px-8 lg:px-10 xl:px-10 bg-proj sm:w-auto sm:text-lg hover:bg-proj-hover hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-gradient-to-br from-white/10 to-transparent"></span>
                            <span className="relative z-10">Book Now</span>
                        </button>
                        <button className="relative w-3/4 max-w-xs px-4 py-2 text-base font-semibold transition-all duration-500 ease-in-out transform bg-white border-2 rounded-md shadow-lg sm:px-6 md:px-8 lg:px-10 xl:px-10 border-sky-500 text-proj sm:w-auto sm:text-lg hover:bg-blue-50 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-gradient-to-br from-white/50 to-transparent"></span>
                            <span className="relative z-10">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;