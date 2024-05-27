// components/BlogList.js

import React, { useState } from 'react';
import Link from 'next/link';

export default function BlogList({ posts }) {
  const [query, setQuery] = useState('');

  const filterPosts = (post) => {
    const { title, summary, contentHtml } = post;
    const lowerCaseQuery = query.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseQuery) ||
      summary.toLowerCase().includes(lowerCaseQuery) ||
      (contentHtml && contentHtml.toLowerCase().includes(lowerCaseQuery))
    );
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredPosts = posts.filter(filterPosts);

  const firstPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search posts"
          value={query}
          onChange={handleChange}
          className="w-full max-w-md p-4 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder-gray-500"
        />
      </div>
      {firstPost && (
        <div className="mb-8 p-6 border rounded-lg shadow-xl bg-gradient-to-r from-indigo-100 to-purple-100">
          <Link href={`/posts/${firstPost.id}`} legacyBehavior>
            <a className="block sm:flex items-center">
              {firstPost.image && (
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                  <img src={firstPost.image} alt={firstPost.title} className="w-full h-64 sm:h-48 rounded-lg object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{firstPost.title}</h2>
                <p className="text-gray-600 mb-2">{firstPost.summary}</p>
                <small className="text-gray-500">{firstPost.date} by {firstPost.author}</small>
              </div>
            </a>
          </Link>
        </div>
      )}
      <ul className="space-y-6">
        {otherPosts.map(({ id, title, date, author, summary, image }) => (
          <li key={id} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white">
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className="block sm:flex items-center">
                {image && (
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <img src={image} alt={title} className="w-full h-48 sm:h-32 rounded-lg object-cover transform hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
                  <p className="text-gray-600 mb-2">{summary}</p>
                  <small className="text-gray-500">{date} by {author}</small>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
