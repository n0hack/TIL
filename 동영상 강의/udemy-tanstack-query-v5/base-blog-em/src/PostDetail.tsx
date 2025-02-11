import { UseMutationResult, useQuery } from '@tanstack/react-query';
import { fetchComments, Post } from './api';

type PostDetailProps = {
  post: Post;
  deleteMutation: UseMutationResult<void, Error, number>;
  updateMutation: UseMutationResult<void, Error, number>;
};

export function PostDetail({ post, deleteMutation, updateMutation }: PostDetailProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchComments(post.id),
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
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p>Deleting the post</p>}
        {deleteMutation.isError && <p>Error deleting the post: {deleteMutation.error.message}</p>}
        {deleteMutation.isSuccess && <p>Post deleted successfully</p>}
      </div>
      <div>
        <button onClick={() => updateMutation.mutate(post.id)}>Update title</button>
        {updateMutation.isPending && <p>Updating the post</p>}
        {updateMutation.isError && <p>Error updating the post: {updateMutation.error.message}</p>}
        {updateMutation.isSuccess && <p>Post updated successfully</p>}
      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data?.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
