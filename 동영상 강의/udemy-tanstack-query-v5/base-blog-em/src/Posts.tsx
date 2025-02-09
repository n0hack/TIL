import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPosts } from './api';

type PostsProps = {};

const maxPostPage = 10;

export function Posts({}: PostsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(currentPage),
  });

  return (
    <>
      <ul>
        {data?.map((post) => (
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
