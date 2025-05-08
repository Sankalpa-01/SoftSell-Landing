import React from 'react';
import { ShieldCheck, ThumbsUp, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={30} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Secure Process',
    description:
      'We prioritize your data safety. Our secure process ensures that your information is protected at all times.',
  },
  {
    icon: <ThumbsUp size={30} className="text-green-600 dark:text-green-400" />,
    title: 'Hassle-Free Experience',
    description:
      'Smooth and guided resale experience. We take care of the details so you can focus on what matters.',
  },
  {
    icon: <Clock size={30} className="text-yellow-600 dark:text-yellow-400" />,
    title: 'Quick Payments',
    description:
      'Receive your payment as soon as possible. We ensure a fast and efficient payment process.',
  },
  {
    icon: <DollarSign size={30} className="text-blue-600 dark:text-blue-400" />,
    title: 'Fair Market Prices',
    description:
      'Get the best market rates for your license. We offer competitive pricing to ensure you get the most value.',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-700 dark:text-indigo-400">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
