const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  console.log(q);

  return <div>SearchPage</div>;
};

export default SearchPage;
