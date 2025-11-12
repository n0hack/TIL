export default async function PostPage(props: { params: { id: string } }) {
  const { id } = await props.params;

  return <div>PostPage {id}</div>;
}
