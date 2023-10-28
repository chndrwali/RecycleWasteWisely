import React from 'react';
import { hero } from '../../data/aboutData';

function Hero() {
  return (
    <section id="hero-acknowledgment" className="pt-4 pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center text-center px-4 lg:px-12">
          <h1 className="font-bold text-dark text-4xl mb-3 lg:mb-5 lg:text-6xl">
            {hero.title}
          </h1>
          <p className="font-semibold text-dark text-xl mb-3">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;