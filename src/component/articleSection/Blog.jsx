import React from 'react';
import { Link } from 'react-router-dom';
import { bloglist } from '../../data/articleData';

function Blog() {
  return (
    <div className="mb-6 mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bloglist.map((item) => (
        <article
          key={item.id}
          className="bg-gradient-to-r from-green-400 via-teal-400 to-teal-500 rounded-xl p-4 shadow-md transition transform hover:scale-105"
        >
          <div className="relative">
            <img
              src={item.image}
              alt="Gambar Sampah"
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <time dateTime="2022-10-10" className="absolute top-2 left-2 text-gray-600 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs ">
              {item.date}
            </time>
          </div>

          <Link to={`/article/detail/${item.id}`} className="hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-8 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
          </Link>

          <div className="mt-2">
            <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              {item.filtered}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Blog;
