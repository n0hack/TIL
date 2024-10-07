import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type LogContextValue = {
  logs: Log[];
  onCreate: (data: Omit<Log, 'id'>) => void;
};

type LogContextProps = {
  children: React.ReactNode;
};

export const LogContext = createContext<LogContextValue>({
  logs: [],
  onCreate: () => {},
});

const LogContextProvider = ({ children }: LogContextProps) => {
  const [logs, setLogs] = useState<Log[]>(
    Array.from({ length: 10 }).map((_, index) => ({
      id: uuidv4(),
      title: `Title ${index}`,
      body: `Body ${index}`,
      date: new Date().toISOString(),
    })),
  );

  const onCreate = ({ title, body, date }: Omit<Log, 'id'>) => {
    const log: Log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return <LogContext.Provider value={{ logs, onCreate }}>{children}</LogContext.Provider>;
};

export { LogContextProvider };
