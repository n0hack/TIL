import React from 'react';
import Text from '@components/Text';
import { PageProps } from 'gatsby';

interface Props {}

const Index = ({ serverData }: PageProps) => {
  console.log(serverData);
  return <Text text="Home" />;
};

export default Index;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
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
