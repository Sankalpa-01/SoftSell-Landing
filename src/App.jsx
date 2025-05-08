import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </>
  );
}

export default App;
