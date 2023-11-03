import React from 'react';
import {
  FaGithub, FaTwitter, FaInstagram, FaLinkedin,
} from 'react-icons/fa'; // Import ikon media sosial
import { footer } from '../../data/homeData';

function Footer() {
  return (
    <footer className="bg-dark flex items-center justify-center p-4 md:px-12">
      <div className="max-w-5xl px-4 py-6 sm:px-6 lg-px-8">
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white md:w-auto">
          &copy;
          {' '}
          {footer.copy}
        </p>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <a
            href={footer.viewOnGithub.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.viewOnGithub.title}
            aria-label={footer.viewOnGithub.title}
          >
            <FaGithub />
          </a>
          <a
            href={footer.twitter.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.twitter.title}
            aria-label={footer.twitter.title}
          >
            <FaTwitter />
          </a>
          <a
            href={footer.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.linkedin.title}
            aria-label={footer.linkedin.title}
          >
            <FaLinkedin />
          </a>
          <a
            href={footer.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-500 hover:underline"
            title={footer.instagram.title}
            aria-label={footer.instagram.title}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
