import { createContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logsStorage from '../storages/logsStorage';

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type LogContextValue = {
  logs: Log[];
  onCreate: (data: Omit<Log, 'id'>) => void;
  onModify: (data: Log) => void;
  onRemove: (id: string) => void;
};

type LogContextProps = {
  children: React.ReactNode;
};

export const LogContext = createContext<LogContextValue>({
  logs: [],
  onCreate: () => {},
  onModify: () => {},
  onRemove: () => {},
});

const LogContextProvider = ({ children }: LogContextProps) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const initialLogsRef = useRef<Log[]>();

  const onCreate = ({ title, body, date }: Omit<Log, 'id'>) => {
    const log: Log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify = (data: Log) => {
    const nextLogs = logs.map(log => (log.id === data.id ? data : log));
    setLogs(nextLogs);
  };

  const onRemove = (id: string) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>{children}</LogContext.Provider>;
};

export { LogContextProvider };
