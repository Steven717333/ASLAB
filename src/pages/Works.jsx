import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime?limit=6');
        const data = await response.json();
        setAnimes(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching animes:', error);
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Works
        </motion.h1>
        
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animes.map((anime) => (
              <motion.div
                key={anime.mal_id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img 
                  src={anime.images.jpg.image_url} 
                  alt={anime.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
                  <p className="text-gray-300">{anime.synopsis?.slice(0, 100)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
