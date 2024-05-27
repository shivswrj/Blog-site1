// components/Search.js

import { useState } from 'react';

export default function Search({ posts }) {
  const [query, setQuery] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring focus:ring-indigo-500 transition"
        />
      </div>
      <ul className="space-y-6">
        {filteredPosts.map(({ id, title, summary }) => (
          <li key={id} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-2">{summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
