/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bloglist } from '../../data/articleData';

function Article() {
  const { id } = useParams();
  const selectedArticle = bloglist.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    // Scroll ke atas halaman saat komponen Article di-mount
    window.scrollTo(0, 0);
  }, []);

  if (!selectedArticle) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <img
        src={selectedArticle.image}
        alt="Gambar Sampah"
        className="w-[1280px] h-[580px] rounded-[10px] md:max-w-screen-xl mb-4"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
        {selectedArticle.title}
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-4">
        {selectedArticle.caption}
      </p>

      {selectedArticle.content.map((step, index) => (
        <div key={index}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
            {step.subtitle}
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-4">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Article;
