import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.includes('@')) errs.email = "Valid email is required";
    if (!form.licenseType) errs.licenseType = "Please select a license type";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      // Optionally reset form
      // setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-200 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800 dark:text-indigo-400">Contact Us</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg space-y-4 transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          placeholder="Company"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <select
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={form.licenseType}
          onChange={(e) => setForm({ ...form, licenseType: e.target.value })}
        >
          <option value="">Select License Type</option>
          <option value="Office365">Office365</option>
          <option value="Windows Server">Windows Server</option>
          <option value="Adobe Suite">Adobe Suite</option>
        </select>
        {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 duration-300"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
