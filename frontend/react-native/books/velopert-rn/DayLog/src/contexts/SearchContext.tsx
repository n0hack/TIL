import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type SearchContextValue = {
  keyword: string;
  onChangeText: (text: string) => void;
};

export const SearchContext = createContext<SearchContextValue>({
  keyword: '',
  onChangeText: () => {},
});

export const SearchContextProvider = ({ children }: Props) => {
  const [keyword, onChangeText] = useState('');

  return <SearchContext.Provider value={{ keyword, onChangeText }}>{children}</SearchContext.Provider>;
};
