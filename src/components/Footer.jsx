import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sakura Studios</h3>
            <p className="text-gray-400 mb-4">
              Creating amazing anime experiences since 2020
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="https://youtu.be/dQw4w9WgXcQ?si=xt9igwBcVOlsQkLd" className="hover:text-red-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtu.be/dQw4w9WgXcQ?si=xt9igwBcVOlsQkLd" className="hover:text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtu.be/dQw4w9WgXcQ?si=xt9igwBcVOlsQkLd" className="hover:text-red-500">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/works" className="text-gray-400 hover:text-white">Our Works</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Anime Street</li>
              <li>Tokyo, Japan 123-4567</li>
              <li>Phone: +81 123-456-789</li>
              <li>Email: info@sakurastudios.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Sakura Animation Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  