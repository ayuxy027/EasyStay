import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaQuora, FaPinterest, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hotels = [
    "Leh", "Ladakh", "Shimla", "Manali", "Jaipur", "Darjeeling", "Jodhpur", "Jaisalmer", "Mount Abu", "Bikaner",
    "Rameswaram", "Ooty", "Kodaikanal", "Udaipur", "Goa", "Chandigarh", "Amritsar", "Ludhiana", "Delhi", "Gurgaon",
    "Noida", "Faridabad", "Gaziabaad", "Banglore", "Chennai", "Karnataka", "Jalandhar", "Patiala", "Zirakpur",
    "Mussoorie", "Macleodganj", "Bhopal", "Khajuraho", "Gwalior", "Ujjain", "Indore", "Hyderabad", "Kolkata",
    "Mathura", "Dharamshala", "Kasol", "Rishikesh", "Haridwar", "Auli", "Jabalpur", "Kanpur", "Amarkantak", "Rewa",
    "Katni", "Varanasi", "Vrindavan", "Mumbai", "Dehradun", "Ranikhet", "Kedarnath", "Mukteshwar", "Dhanulti",
    "Maihar", "Satna", "Nagpur", "Pune", "Munnar", "Lucknow", "Prayagraj", "Chitrakoot", "Himachal", "Lansdowen",
    "Kathgodam", "Nainital", "Jim Corbett", "Alleppey", "Thekkady", "Kovalam", "Kanyakumari", "Kochi", "Konark",
    "Puri", "Bhubaneswar"
  ];

  const renderHotels = () => {
    const columns = [];
    for (let i = 0; i < hotels.length; i += 13) {
      columns.push(
        <div className="text-left w-1/7" key={i}>
          <p className="text-sm leading-6">
            {hotels.slice(i, i + 13).map(hotel => (
              <React.Fragment key={hotel}>
                Hotels in {hotel}<br />
              </React.Fragment>
            ))}
          </p>
        </div>
      );
    }
    return columns;
  };

  return (
    <div className="flex flex-col items-center w-full mt-20 text-white bg-blue-900">
      <div className="py-10 text-center border-b border-blue-700">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="mt-8 text-left">
            <h2 className="text-4xl font-bold">Idbook</h2>
            <p className="mt-6 text-lg">
              VPO- SARHAUL, SEC-18, <br />
              Gurgaon, <br />
              Haryana, 122001
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
                <Link to="/contactus" className="hover:underline">
                  Contact Us <br />
                </Link>
                <Link to="/return-and-refund-policy" className="hover:underline" onClick={handleLinkClick}>
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
      </div>

      <div className="my-4 border-t border-white"></div>

      <div className="w-11/12 mx-auto mt-3 text-left md:w-9/12">
        <h3 className="text-xl font-bold">Idbook hotels</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {renderHotels()}
      </div>

      <div className="my-4 border-t border-white"></div>

      <div className="flex flex-wrap items-center justify-around w-11/12 gap-8 mx-auto mt-4 md:w-9/12">
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex gap-4 mt-5">
            <Link to="https://www.facebook.com/p/Idbook-hotels-100063459046918/">
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link to="https://www.instagram.com/idbookhotels/">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link to="https://www.linkedin.com/company/idbook-hotels/?originalSubdomain=in">
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCv6CYWYoDo9Kyow5BMzJfAQ">
              <FaYoutube className="text-2xl" />
            </Link>
            <Link to="https://www.quora.com/profile/Idbook-Hotels">
              <FaQuora className="text-2xl" />
            </Link>
            <Link to="https://in.pinterest.com/idbookhotel/">
              <FaPinterest className="text-2xl" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Book Hotel Faster: Download our app</h3>
          <div className="flex gap-4 mt-5">
            <div className="p-2 bg-gray-700 rounded-lg">
              <FaGooglePlay className="text-3xl" />
            </div>
            <div className="p-2 bg-gray-700 rounded-lg">
              <FaApple className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-4 border-t border-white"></div>

      <div className="py-4">
        <h4 className="text-center">© 2022 All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
