import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">
            Sakura Studios
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link to="/works" className="text-white hover:text-red-500 transition-colors">
              Works
            </Link>
            <Link to="/team" className="text-white hover:text-red-500 transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-white hover:text-red-500 transition-colors">
              Contact
            </Link>
          </div>
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 py-4">
            <Link 
              to="/" 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/works" 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;