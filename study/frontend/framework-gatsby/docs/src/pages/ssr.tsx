import { PageProps } from 'gatsby';
import React from 'react';

interface Props extends PageProps {
  serverData: {
    message: string;
  };
}

const SSRPage = ({ serverData }: Props) => {
  return (
    <main>
      <h1>SSR Page with Dogs</h1>
      <img src={serverData.message} alt="Happy dog" />
    </main>
  );
};

export default SSRPage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
