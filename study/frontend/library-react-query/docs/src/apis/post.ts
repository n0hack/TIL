import fetcher from './fetcher';

const post = {
  requestGetPosts: async () => {
    const { data } = await fetcher.get(`https://jsonplaceholder.typicode.com/posts`);
    return data;
  },
};

export default post;
