// pages/index.js

import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Welcome to My Blog
        </h1>
        <BlogList posts={allPostsData} />
      </div>
    </Layout>
  );
}
