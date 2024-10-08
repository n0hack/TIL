import AsyncStorage from '@react-native-community/async-storage';
import { Log } from '../contexts/LogContext';

const key = 'logs';

const logsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw || '[]') as Log[];
      return parsed;
    } catch {
      throw new Error('Failed to load logs');
    }
  },
  async set(data: Log[]) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch {
      throw new Error('Failed to save logs');
    }
  },
};

export default logsStorage;
