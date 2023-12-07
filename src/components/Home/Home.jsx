import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../Navbar/Navbar';
import Works from '../../pages/Works';
import Skills from '../../pages/Skills';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import BackToTopButton from '../BackToTop/BackToTopButton';
import Hero from '../../pages/Hero';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
        <Element name="works">
        <Works />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <BackToTopButton/>
    </div>
  );
};

export default Home;
