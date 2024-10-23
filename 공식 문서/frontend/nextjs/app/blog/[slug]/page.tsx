const Page = ({ params }: { params: { slug: string } }) => {
  return <div>My Post: {params.slug}</div>;
};

export default Page;

export async function generateStaticParams() {
  return [{ slug: 'en-US' }, { slug: 'de' }];
}
