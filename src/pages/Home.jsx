import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SL from '../assets/project/SL.jpeg';
import ROR from '../assets/project/ROR.jpg';


const Home = () => {
  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-screen flex items-center justify-center text-center bg-gray-900 text-white px-4"
      >
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Sakura Animation Studios
          </motion.h1>
          <p className="text-xl mb-8">Bringing Your Anime Dreams to Life</p>
          <Link to="/works">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full">
              View Our Works
            </button>
          </Link>
        </div>
      </motion.div>

      <section className="w-full py-16 px-4 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Animations</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* API content will go here */}
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={SL} alt="Solo Leveling" className='w-2/4 object-cover rounded-lg py-2' />
            <h3 className='text-center'>Solo Leveling</h3>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={ROR} alt="Record of Ragnarok" className='w-2/4 object-cover rounded-lg py-2' />
            <h3 className='text-center'>Record of Ragnarok</h3>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Creative Excellence</h3>
              <p>Pushing Creative boundaries to the limits</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p>Industry veterans at work</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Global Reach</h3>
              <p>Worldwide and all ages content delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;