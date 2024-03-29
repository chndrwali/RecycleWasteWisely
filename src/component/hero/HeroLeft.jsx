/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HeroTitle() {
  const [typedTitle, setTypedTitle] = useState('Recycle');
  const [currentCharIndex, setCurrentCharIndex] = useState(11);

  useEffect(() => {
    const titleText = 'Recycle Waste Wisely';
    const titleLength = titleText.length;

    const typeTitle = () => {
      if (currentCharIndex < titleLength) {
        setTypedTitle(titleText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setCurrentCharIndex(11);
        setTypedTitle('Recycle');
      }
    };

    const typingInterval = setInterval(typeTitle, 350);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentCharIndex]);

  return (
    <h1 className="font-bold text-primary text-4xl mb-4 lg:text-6xl">
      <span className="typed-text">{typedTitle}</span>
      <span className="cursor">&#9614;</span>
      {' '}
    </h1>
  );
}

function HeroLeft({ hero }) {
  return (
    <div className="w-full self-center px-4 lg:pl-4 lg:pr-8 lg:w-1/2">
      <HeroTitle />
      <h2 className="font-semibold text-dark text-xl mb-3 lg:text-3xl">
        {hero.subtitle}
      </h2>
      <p className="font-medium text-dark text-base mb-10 leading-relaxed lg:text-lg">
        {hero.desc}
      </p>
      <Link
        to="/klasifikasikan"
        className="text-white text-xl font-medium bg-primary rounded px-7 py-3 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out"
        title="Tombol mulai klasifikasi"
        aria-label="Tombol mulai klasifikasi"
      >
        {hero.cta}
      </Link>
    </div>
  );
}

export default HeroLeft;
