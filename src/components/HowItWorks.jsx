import React from 'react';
import { Upload, CheckCircle, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Upload size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Upload License",
    description: "Upload your license details securely.",
  },
  {
    icon: <DollarSign size={40} className="text-teal-600 dark:text-teal-400" />,
    title: "Get Valuation",
    description: "We offer the best price for you.",
  },
  {
    icon: <CheckCircle size={40} className="text-green-600 dark:text-green-400" />,
    title: "Get Paid",
    description: "Get paid instantly after the deal.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-700 dark:text-indigo-400">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-300 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
