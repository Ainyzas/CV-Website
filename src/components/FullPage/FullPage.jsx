import React from 'react';
import FloatingNav from '../Sections/FloatingNav/FloatingNav';
import Header from '../Sections/Header/Header';
import About from '../Sections/About/About';
import Skills from '../Sections/Skills/Skills';
import Portfolio from '../Sections/Portfolio/Portfolio';
import Contact from '../Sections/Contact/Contact';
import Footer from '../Sections/Footer/Footer';

export default function FullPage() {
  return (
    <div id="home">
      <Header />
      <FloatingNav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
