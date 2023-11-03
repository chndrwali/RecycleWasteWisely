/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { bloglist } from '../../data/articleData';

function Article() {
  const { id } = useParams();
  const selectedArticle = bloglist.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    // Scroll ke atas halaman saat komponen Article di-mount
    window.scrollTo(0, 0);
  }, []);

  if (!selectedArticle) {
    return <div className="text-2xl text-red-500">Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 border mb-4 border-slate-950">
      <div className="mb-4">
        <NavLink to="/article" className="text-teal-800 hover:underline flex items-center">
          <FaArrowLeft className="mr-2" />
          {' '}
          Kembali
        </NavLink>
      </div>
      <img
        src={selectedArticle.image}
        alt="Gambar Sampah"
        className="w-full max-h-[550px] rounded-lg mb-4"
      />
      <time dateTime="2022-10-10" className="mb-4 whitespace-nowrap rounded-full bg-gray-100 px-2.5 text-sm text-gray-600">
        {selectedArticle.date}
      </time>
      <h1 className="text-3xl font-semibold text-gray-800 mt-4">
        {selectedArticle.title}
      </h1>

      <p className="text-gray-600 mt-4">
        {selectedArticle.caption}
      </p>

      {selectedArticle.content.map((step, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            {step.subtitle}
          </h2>

          <p className="text-gray-600 mt-2">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Article;
