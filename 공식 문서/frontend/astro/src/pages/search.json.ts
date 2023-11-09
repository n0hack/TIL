import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

async function getPosts() {
  const posts = await getCollection('story');
  // return posts.;
}

export const GET: APIRoute = async ({ params }) => {
  console.log(params.page, params.q, params);
  console.log(await getPosts());

  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    })
  );
};
