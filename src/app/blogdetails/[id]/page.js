
'use client';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const GET_POST_BY_ID = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      _id
      title
      author
    content
    }
  }
`;

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post.</p>;

  const { title, author,content } = data.post;

  return (
    <div className="max-w-3xl mx-auto p-8 my-12 bg-white rounded-2xl shadow-2xl border border-gray-100">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
      {title}
    </h1>
  
    <p className="text-base text-gray-800 mb-6 leading-relaxed">
      {content}
    </p>
  
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500 italic">Written by {author}</p>
      <span className="text-xs text-gray-400">🕒 3 min read</span>
    </div>

     <div className="flex justify-end">
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-orange-400 hover:bg-gray-300 text-sm rounded"
        >
          ← Back
        </button>
      </div>
  </div>
  
  );
}
