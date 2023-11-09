import type { APIRoute } from 'astro';

const usernames = ['Sarah', 'Chris', 'Yan', 'Elian'];

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;
  console.log(params);

  return new Response(
    JSON.stringify({
      name: usernames[id ? +id : 0],
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    }
  );
};
