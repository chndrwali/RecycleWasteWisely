/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { bloglist } from '../../data/articleData'; // Impor objek bloglist

function Blog() {
  return (
    <div>
      {bloglist.map((item) => (
        <article
          key={item.id}
          className="mt-4 mb-4 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-yellow-500 to-teal-800 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div className="rounded-[10px] bg-white p-4 !pt-10 sm:p-6 overflow-hidden">
            <img
              src={item.image}
              alt="Gambar Sampah"
              className="w-[1280px] h-[280px] rounded-[10px] md:max-w-screen-xl mb-4"
            />
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {item.date}
            </time>

            <Link to={`/article/detail/${item.id}`}>
              <h3 className="mt-0.5 text-lg font-medium text-gray-900 hover:text-yellow-500">
                {item.title}
              </h3>
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <span
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                {item.filtered}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Blog;
