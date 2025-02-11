import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPosts, Post } from './api';
import { PostDetail } from './PostDetail';

const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(currentPage),
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.message}</p>
      </>
    );
  }

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
