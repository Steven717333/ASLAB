import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
     
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] bg-[url('/images/studio-bg.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            About Sakura Animation Studios
          </h1>
        </div>
      </motion.div>

      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2020, Sakura Animation Studios began with a simple yet ambitious vision: 
              to create anime that pushes the boundaries of storytelling and animation. 
              Our journey started with a small team of passionate artists and has grown into 
              a full-fledged animation studio.
            </p>
          </motion.div>

          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                Pushing the boundaries of animation technology and storytelling
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-300">
                Delivering exceptional animation quality in every frame
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Creativity</h3>
              <p className="text-gray-300">
                Bringing unique and compelling stories to life
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <h4 className="text-3xl font-bold text-red-500">500+</h4>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <h4 className="text-3xl font-bold text-red-500">1000+</h4>
            <p>Team Members</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <h4 className="text-3xl font-bold text-red-500">200+</h4>
            <p>Awards Won</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <h4 className="text-3xl font-bold text-red-500">10B+</h4>
            <p>Global Viewers</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 