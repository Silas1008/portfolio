import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const originalText = "I Design. I like minimalist and fine lines";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <div>
        <h1>Im, Athiza</h1>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default Hero;
