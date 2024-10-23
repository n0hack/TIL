import { createContext, useState } from 'react';

export type User = {
  id: string;
  displayName: string;
  photoURL: string | null;
};

type UserContextValue = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
