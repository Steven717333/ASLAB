import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Akame from '../assets/team/Akame.jpeg';
import Lelouch from '../assets/team/Lelouch.jpeg';
import Artoria from '../assets/team/Artoria.jpeg';
import Light from '../assets/team/Light.jpeg';
import Tatsuya from '../assets/team/Tatsuya.jpeg';
import Miyuki from '../assets/team/Miyuki.jpeg';

const teamMembers = [
  {
    id: 1,
    name: "Akame",
    role: "Creative Director",
    image: Akame,
    description: "10+ years of experience in anime production"
  },
  {
    id: 2,
    name: "Lelouch Vi Britannia",
    role: "Lead Animator",
    image: Lelouch,
    description: "Specialist in character animation"
  },
  {
    id: 3,
    name: "Artoria Pendragon",
    role: "Art Director",
    image: Artoria,
    description: "Background and environment design expert"
  },
  {
    id: 4,
    name: "Light Yagami",
    role: "Story Writer",
    image: Light,
    description: "Award-winning screenplay writer"
  },
  {
    id: 5,
    name: "Tatsuya Shiba",
    role: "Technical Director",
    image: Tatsuya,
    description: "3D animation and effects specialist"
  },
  {
    id: 6,
    name: "Miyuki Shiba",
    role: "Character Designer",
    image: Miyuki,
    description: "Creating memorable anime characters"
  }
];

const Team = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white relative">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 mx-auto w-fit z-50"
          >
            <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg border border-red-500 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <svg 
                  className="w-5 h-5 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>There are no positions available currently</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-700">
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-red-500 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center bg-gray-800 p-8 rounded-lg relative"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-6 text-gray-300">
            We're always looking for talented individuals to join our creative team.
          </p>
          <button 
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Team; 