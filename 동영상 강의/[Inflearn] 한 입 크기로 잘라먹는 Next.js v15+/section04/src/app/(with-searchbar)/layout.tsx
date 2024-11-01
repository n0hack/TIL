import { Searchbar } from '../../components/searchbar';

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default SearchLayout;
