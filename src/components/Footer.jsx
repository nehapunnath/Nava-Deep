import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              
              <h3 className="text-2xl font-bold school-font">Nava Deep <br /> Primary & High School</h3>
            </div>
            <p className="text-gray-300 mb-6 navigation-font leading-relaxed">
              Established in 1988, Nava Deep School has been a beacon of excellence in education, 
              nurturing young minds to become responsible global citizens through holistic development 
              and innovative learning approaches.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 school-font border-l-4 border-blue-500 pl-3">Quick Links</h4>
            <ul className="space-y-3 navigation-font">
                <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/academics" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Academics
                </a>
              </li>
              <li>
                <a href="/facilites" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Facilites
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Events
                </a>
              </li>
             
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group footer-link">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact 
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 school-font border-l-4 border-green-500 pl-3">Contact Info</h4>
            <div className="space-y-4 navigation-font">
              <div className="flex items-start space-x-3 group">
                <div className="mt-1">
                  <FaMapMarkerAlt className="text-green-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    1st Cross road, Gayathri layout,<br />
                    Basavanapura Main Road,<br />
                    K. R. Puram,<br />
                    Bangalore - 560036
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <FaPhone className="text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a href="tel:+91-9886734812" className="text-gray-300 hover:text-white transition-colors duration-300 block footer-link">
                    +91-9886734812
                  </a>
                  <a href="tel:+91-7975375427" className="text-gray-300 hover:text-white transition-colors duration-300 block footer-link">
                    +91-7975375427
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <FaClock className="text-yellow-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Mon - Fri: 8:00 AM - 4:00 PM<br />
                    Saturday: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;