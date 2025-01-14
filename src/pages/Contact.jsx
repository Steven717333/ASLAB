import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  rows="4"
                ></textarea>
              </div>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7016359!3d35.6859931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f1ecacfdd5!2sShinjuku%20Station!5e0!3m2!1sen!2sjp!4v1615056563971!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 