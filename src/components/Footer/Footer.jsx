// Footer.jsx
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-green-500 text-xl font-bold">Invest India</h3>
            <p className="text-sm text-gray-300">
              Empowering investors in India's growth story through market insights and strategic opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-500 text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Market Updates
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Investment Sectors
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Investor Resources
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-green-500 text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: support@investindia.com</li>
              <li>Phone: +91 12345 67890</li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-green-500 text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Invest India. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;