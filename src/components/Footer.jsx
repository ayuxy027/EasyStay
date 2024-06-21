import React from 'react';
import { Link } from 'react-router-dom';

const facebookUrl = 'https://www.facebook.com/p/Idbook-hotels-100063459046918/';
const instagramUrl = 'https://www.instagram.com/idbookhotels/';
const linkedinUrl = 'https://www.linkedin.com/company/idbook-hotels/?originalSubdomain=in';
const youtubeUrl = 'https://www.youtube.com/channel/UCv6CYWYoDo9Kyow5BMzJfAQ';
const quoraUrl = 'https://www.quora.com/profile/Idbook-Hotels';
const pinterestUrl = 'https://in.pinterest.com/idbookhotel/';

const Footer = () => {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-20 w-full bg-blue-900 text-white flex flex-col items-center">
      <div className="text-center py-10">
        <div className="flex flex-wrap justify-center gap-36">
          <div className="mt-8 text-left">
            <h2 className="text-4xl font-bold">Idbook</h2>
            <p className="text-lg mt-6">
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

      <div className="border-t border-white my-4"></div>

      <div className="text-left w-11/12 md:w-9/12 mx-auto mt-3">
        <h3 className="text-xl font-bold">Idbook hotels</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-4">
        <div className="text-left">
          <h3 className="text-xl font-bold">Hotels</h3>
          <p className="text-lg">
            Hotels in Leh <br />
            Hotels in Ladakh<br />
            Hotels in Shimla<br />
            Hotels in Manali<br />
            Hotels in Jaipur<br />
            hotels in Darjeeling<br />
            Hotels in Jodhpur<br />
            Hotels in Jaisalmer<br />
            hotels in Mount Abu<br />
            Hotels in Bikaner<br />
            Hotels in Rameswaram<br />
            hotels in Ooty<br />
            Hotels in Kodaikanal<br />
          </p>
        </div>
        <div className="text-left">
          <p className="text-lg">
            Hotels in Udaipur<br />
            Hotels in Goa<br />
            Hotels in Chandigarh<br />
            Hotels in Amritsar<br />
            Hotels in Ludhiana<br />
            Hotels in Delhi<br />
            Hotels in Gurgaon<br />
            Hotels in Noida<br />
            Hotels in Faridabad<br />
            Hotels in Gaziabaad<br />
            Hotels in Banglore<br />
            Hotels in Chennai<br />
            Hotels in Karnataka
          </p>
        </div>
        <div className="text-left">
          <p className="text-lg">
            Hotels in Jalandhar<br />
            Hotels in Patiala<br />
            Hotels in Zirakpur<br />
            Hotels in Mussoorie<br />
            Hotels in Macleodganj<br />
            Hotels in Bhopal<br />
            Hotels in Khajuraho<br />
            Hotels in Gwalior<br />
            Hotels in Ujjain<br />
            Hotels in Indore<br />
            Hotels in Hyderabad<br />
            Hotels in Kolkata<br />
            Hotels in Mathura
          </p>
        </div>
        <div className="text-left">
          <p className="text-lg">
            Hotels in Dharamshala<br />
            Hotels in Kasol<br />
            Hotels in Rishikesh<br />
            Hotels in Haridwar<br />
            Hotels in Auli<br />
            Hotels in Jabalpur<br />
            Hotels in Kanpur<br />
            Hotels in Amarkantak<br />
            Hotels in Rewa<br />
            Hotels in Katni<br />
            Hotels in Varanasi<br />
            Hotels in Vrindavan<br />
            Hotels in Mumbai
          </p>
        </div>
        <div className="text-left">
          <p className="text-lg">
            Hotels in Dehradun<br />
            Hotels in Ranikhet<br />
            Hotels in Kedarnath<br />
            Hotels in Mukteshwar<br />
            Hotels in Dhanulti<br />
            Hotels in Maihar<br />
            Hotels in Satna<br />
            Hotels in Nagpur<br />
            Hotels in Pune<br />
            Hotels in Munnar<br />
            Hotels in Lucknow<br />
            Hotels in Prayagraj<br />
            Hotels in Chitrakoot<br />
          </p>
        </div>
        <div className="text-left">
          <p className="text-lg">
            Hotels in Himachal<br />
            Hotels in Lansdowen<br />
            Hotels in Kathgodam<br />
            Hotels in Nainital<br />
            Hotels in Jim Corbett<br />
            Hotels in Alleppey<br />
            Hotels in Thekkady<br />
            Hotels in Kovalam<br />
            Hotels in Kanyakumari<br />
            Hotels inKochi<br />
            Hotels in Konark<br />
            Hotels in Puri <br />
            Hotels in Bhubaneswar
          </p>
        </div>
      </div>

      <div className="border-t border-white my-4"></div>

      <div className="flex flex-wrap justify-around items-center gap-8 mt-4 w-11/12 md:w-9/12 mx-auto">
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex gap-4 mt-5">
            <Link to={facebookUrl}>
              <i className="fab fa-facebook-f text-2xl"></i>
            </Link>
            <Link to={instagramUrl}>
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
            <Link to={linkedinUrl}>
              <i className="fab fa-linkedin-in text-2xl"></i>
            </Link>
            <Link to={youtubeUrl}>
              <i className="fab fa-youtube text-2xl"></i>
            </Link>
            <Link to={quoraUrl}>
              <i className="fab fa-quora text-2xl"></i>
            </Link>
            <Link to={pinterestUrl}>
              <i className="fab fa-pinterest text-2xl"></i>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Book Hotel Faster: Download our app</h3>
          <div className="flex gap-4 mt-5">
            <div className="bg-gray-700 p-2 rounded-lg">
              <i className="fab fa-google-play text-3xl"></i>
            </div>
            <div className="bg-gray-700 p-2 rounded-lg">
              <i className="fab fa-apple text-3xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white my-4 w-full"></div>

      <div className="py-4">
        <h4 className="text-center">© 2022 All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
