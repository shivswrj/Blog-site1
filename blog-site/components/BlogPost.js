// components/BlogPost.js

export default function BlogPost({ postData }) {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      {postData.image && (
        <div className="mb-6">
          <img src={postData.image} alt={postData.title} className="w-full rounded-lg object-cover transform hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{postData.title}</h1>
      <small className="text-gray-500 mb-4 block">{postData.date} by {postData.author}</small>
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="prose prose-lg"
      />
    </article>
  );
}
