import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Sankalpa Panda',
    role: 'Software Developer',
    feedback:
      'SoftSell helped us recover values from our unused software licenses. The process was smooth and the team was very professional. Highly recommended!',
  },
  {
    name: 'Navyansh Panda',
    role: 'Project Manager',
    feedback:
      'Professional and efficient service. I was impressed with how quickly they handled everything. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-700 dark:text-indigo-400">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{r.feedback}”</p>
            <p className="font-semibold text-indigo-800 dark:text-indigo-400">{r.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{r.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
