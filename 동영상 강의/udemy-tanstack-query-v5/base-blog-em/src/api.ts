export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function fetchPosts(pageNum: number): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`);
  return response.json();
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
}

export async function deletePost(postId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function updatePost(postId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: 'Updated Post',
    }),
  });
  return response.json();
}
