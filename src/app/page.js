// src/app/page.js
'use client';

import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const GET_POSTS = gql`
  query BlogPost {
    posts {
      _id
      title
      author
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div className="p-6 m-6 flex justify-center">
  <div className="bg-gray-100 p-6 rounded-lg shadow-2xl w-full max-w-5xl">
    <h1 className="text-2xl font-bold text-black-600 mb-4  text-center">Blog Posts</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">

      {data.posts.map((BlogPost) => (
<li key={BlogPost._id} className="border border-gray-200 hover:border-gray-400 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">

<Link href={`blogdetails/${BlogPost._id}`}>
            <div >
            <h2 className="text-xl font-semibold text-orange-600 hover:underline cursor-pointer">
    {BlogPost.title}
  </h2>
  <p className="text-sm text-gray-600"> {BlogPost.author}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
}
