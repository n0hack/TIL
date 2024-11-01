const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return <div>SearchPage</div>;
};

export default SearchPage;
