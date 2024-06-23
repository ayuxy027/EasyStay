import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaQuora, FaPinterest, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center w-full text-white bg-blue-900">
      <div className="flex flex-wrap justify-around w-full py-10 text-center border-b border-blue-700">
        <div className="mt-8 text-left">
          <h2 className="text-4xl font-bold">Easy Stay</h2>
          <p className="mt-6 text-lg">
            Pune, <br />
            Maharashtra, 411001
          </p>
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-bold">Our Services</h3>
          <div className="text-lg leading-8">
            <p>
              <Link to="/about" className="hover:underline" onClick={handleLinkClick}>
                About Us <br />
              </Link>
              <Link to="/career" className="hover:underline" onClick={handleLinkClick}>
                Careers <br />
              </Link>
              Blog <br />
              <Link to="/holidays" className="hover:underline" onClick={handleLinkClick}>
                Holiday Package <br />
              </Link>
              Group booking <br />
            </p>
          </div>
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-bold">Partnership with us</h3>
          <div className="text-lg leading-8">
            <p>
              <Link to="/franchise" className="hover:underline">
                Get Franchise <br />
              </Link>
              Travel Agent <br />
              <Link to="/corporates" className="hover:underline">
                Corporate Enquiries <br />
              </Link>
              Flight <br />
              Transport
            </p>
          </div>
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-bold">Policies</h3>
          <div className="text-lg leading-8">
            <p>
              <Link to="/faq" className="hover:underline" onClick={handleLinkClick}>
                FAQ <br />
              </Link>
              <Link to="/support" className="hover:underline">
                Contact Us <br />
              </Link>
              <Link to="/refund-policy" className="hover:underline" onClick={handleLinkClick}>
                Cancellation & Refund Policy <br />
              </Link>
              <Link to="/privacy-policy" className="hover:underline" onClick={handleLinkClick}>
                Privacy Policy <br />
              </Link>
              <Link to="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around w-full gap-8 px-10 mx-auto mt-4">
        <div className="flex-1 text-center">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center gap-4 mt-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="https://www.quora.com" target="_blank" rel="noopener noreferrer">
              <FaQuora className="text-2xl" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-xl font-bold">Book Hotels Faster: Download our app</h3>
          <div className="flex justify-center gap-4 mt-5">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-lg">
              <FaGooglePlay className="text-3xl" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-lg">
              <FaApple className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full py-4">
        <h4 className="text-center">© 2024 All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
