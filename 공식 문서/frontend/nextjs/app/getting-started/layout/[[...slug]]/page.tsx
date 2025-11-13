// Route Props Helper 타입
export default async function LayoutPage({ params, searchParams }: PageProps<"/getting-started/layout/[[...slug]]">) {
  const { slug } = await params;
  const q = (await searchParams).q;

  console.log(slug, q);

  return <div>LayoutPage</div>;
}
