import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaQuora, FaPinterest, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 text-white bg-blue-900 md:px-8 lg:px-16">
      <div className="grid grid-cols-2 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Easy Stay</h2>
          <p className="text-sm">
            Pune, <br />
            Maharashtra, 411001
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold sm:text-xl">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/holidays" className="hover:underline">Holiday Package</Link></li>
            <li><Link to="/group-booking" className="hover:underline">Group booking</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold sm:text-xl">Partnership with us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/franchise" className="hover:underline">Get Franchise</Link></li>
            <li><Link to="/travel-agent" className="hover:underline">Travel Agent</Link></li>
            <li><Link to="/corporate" className="hover:underline">Corporate Enquiries</Link></li>
            <li><Link to="/flight" className="hover:underline">Flight</Link></li>
            <li><Link to="/transport" className="hover:underline">Transport</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold sm:text-xl">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Cancellation & Refund Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-blue-800">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div>
            <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaQuora, FaPinterest].map((Icon, index) => (
                <a key={index} href="#" className="text-white transition-colors hover:text-blue-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-right">
            <h4 className="mb-4 text-xl font-semibold">Book Hotels Faster: Download our app</h4>
            <div className="flex justify-center space-x-4 sm:justify-end">
              <a href="#" className="p-2 transition-colors bg-gray-700 rounded-lg hover:bg-gray-600">
                <FaGooglePlay size={24} />
              </a>
              <a href="#" className="p-2 transition-colors bg-gray-700 rounded-lg hover:bg-gray-600">
                <FaApple size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-center">
        © 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;