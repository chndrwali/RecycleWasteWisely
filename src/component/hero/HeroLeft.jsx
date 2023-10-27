/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HeroLeft({ hero }) {
  const [typedTitle, setTypedTitle] = useState('Pengelolaan'); // Mulai dengan "Pengelolaan"
  const [currentCharIndex, setCurrentCharIndex] = useState(11); // Panjang "Pengelolaan"

  useEffect(() => {
    const titleText = 'Pengelolaan Sampah Masyarakat';
    const titleLength = titleText.length;

    const typeTitle = () => {
      if (currentCharIndex < titleLength) {
        setTypedTitle(titleText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        // Reset to the beginning if all characters have been typed
        setCurrentCharIndex(11); // Kembali ke "Pengelolaan"
        setTypedTitle('Pengelolaan');
      }
    };

    const typingInterval = setInterval(typeTitle, 350); // Kecepatan mengetik (350 milidetik)

    return () => {
      clearInterval(typingInterval); // Membersihkan interval saat komponen dilepaskan
    };
  }, [currentCharIndex]);

  return (
    <div className="w-full self-center px-4 lg:pl-4 lg:pr-8 lg:w-1/2">
      <h1 className="font-bold text-primary text-4xl mb-4 lg:text-6xl">
        <span className="typed-text">{typedTitle}</span>
        <span className="cursor">&#9608;</span>
        {' '}
        {/* Simbol kursor */}
      </h1>
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
