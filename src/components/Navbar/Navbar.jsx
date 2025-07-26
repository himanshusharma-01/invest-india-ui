// Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        
          <div className="flex-shrink-0 flex items-center">
            <NavLink 
              to="/" 
              className="text-2xl font-bold text-white-500 hover:text-amber-400 transition-colors"
            >
              Invest India
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors ${
                  isActive ? 'border-b-2 border-amber-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors ${
                  isActive ? 'border-b-2 border-amber-500' : ''
                }`
              }
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors ${
                  isActive ? 'border-b-2 border-amber-500' : ''
                }`
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;