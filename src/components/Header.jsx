import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setMenuOpen(false), 500); 
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <link rel = "icon" type="" href=""/>
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">SoftSell</div>

        <ul className="hidden md:flex space-x-6 text-blue-500 dark:text-blue-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-800 dark:hover:text-white transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 dark:text-blue-400 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 shadow space-y-3 text-blue-500 dark:text-blue-300 font-medium transition-all origin-top"
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-blue-800 dark:hover:text-white transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
