import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Spectre</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional data services for businesses worldwide. We provide high-quality annotation, transcription, 
              and translation services to help you unlock the value of your data.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <ExternalLink size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <ExternalLink size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>contact@spectreai.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+(254) 7123-45678</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Nairobi, Ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Spectre Data Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;