/* eslint-disable react/prop-types */
import React from 'react'; // Pastikan mengimpor React
import {
  FaLinkedin, FaGithub, FaInstagram, FaTwitter,
} from 'react-icons/fa';

function Developer({ developer }) {
  return (
    <div className="w-full border-[1.5px] border-dark rounded-lg shadow-xl px-4 l sm:w-4/5 md:w-[calc(50%-12px)] lg:w-[calc(50%-3rem)] g:px-9">
      <div className="flex flex-wrap justify-center text-center relative">
        <img
          src={developer.image}
          alt={developer.alt}
          className="w-[130px] h-[130px] object-cover border-[1.5px] border-dark rounded-full aspect-square absolute top-[-80px] lg:w-[160px] lg:h-[160px]"
        />
        <h3 className="w-full text-xl font-semibold text-dark mt-14 mb-1 lg:mt-24 lg:mb-3 lg:text-3xl">
          {developer.name}
        </h3>
        <span className="w-full text-base text-primary font-medium mb-2 lg:mb-3 lg:text-lg">
          {developer.title}
        </span>
        <div className="w-full flex justify-center items-center gap-x-1 mb-3">
          <a
            href={developer.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Tombol LinkedIn"
            aria-label="Tombol LinkedIn"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl rounded-full transition duration-300 ease-out bg-gradient-to-r from-[#0077B5] to-[#00669D] hover:from-[#00669D] hover:to-[#004E87] hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href={developer.socials.github}
            target="_blank"
            rel="noreferrer"
            title="Tombol GitHub Developer"
            aria-label="Tombol GitHub Developer"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl rounded-full transition duration-300 ease-out bg-gradient-to-r from-white to-gray-800 hover:from-gray-800 hover:to-gray-900 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href={developer.socials.instagram}
            target="_blank"
            rel="noreferrer"
            title="Tombol Instagram"
            aria-label="Tombol Instagram"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl rounded-full transition duration-300 ease-out bg-gradient-to-r from-[#FDCB52] to-[#F97316] hover:from-[#F97316] hover:to-[#DB2777] hover:text-white"
          >
            <FaInstagram />
          </a>

          <a
            href={developer.socials.twitter}
            target="_blank"
            rel="noreferrer"
            title="Tombol Twitter"
            aria-label="Tombol Twitter"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl rounded-full transition duration-300 ease-out bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-900 hover:text-white"
          >
            <FaTwitter />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Developer;
