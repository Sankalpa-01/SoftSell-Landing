import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-indigo-200 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 text-black dark:text-white h-screen flex flex-col justify-center items-center px-4 overflow-hidden transition-colors duration-500"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          className="absolute bg-purple-300 dark:bg-purple-700 opacity-30 rounded-full w-72 h-72 top-10 left-10 mix-blend-multiply filter blur-2xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bg-teal-300 dark:bg-teal-600 opacity-30 rounded-full w-72 h-72 top-40 left-40 mix-blend-multiply filter blur-2xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bg-sky-300 dark:bg-sky-700 opacity-30 rounded-full w-72 h-72 top-64 left-80 mix-blend-multiply filter blur-2xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Turn Unused Software Into Cash
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6 text-black dark:text-gray-300">
          Got software licenses you're no longer using? Let us help you turn them into profit in just a few clicks.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-500 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-800 text-white py-3 px-6 rounded-lg shadow-lg transition"
        >
          Sell My Licenses
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
