import React from 'react';
import { footer } from '../../data/homeData';

function Footer() {
  return (
    <footer className="bg-dark flex items-center justify-center p-4 md:px-12">
      <div className="max-w-5xl px-4 py-16 sm:px-6 lg-px-8">
        <div className="flex flex-col items-center md:items-stretch">
          <img
            src={footer.logo}
            className="mx-auto md:w-auto"
            alt="Logo"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white md:w-auto">
          &copy;
          {' '}
          {footer.copy}
        </p>
        <a
          href={footer.viewOnGithub.url}
          target="_blank"
          rel="noreferrer"
          className="w-full text-white items-center flex justify-center underline font-light min-h-[44px] min-w-[44px] hover:text-yellow-500/90 hover:decoration-yellow-500/90 md:w-auto transition-all duration-200 ease-in-out"
          title={footer.viewOnGithub.title}
          aria-label={footer.viewOnGithub.title}
        >
          {footer.viewOnGithub.title}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
