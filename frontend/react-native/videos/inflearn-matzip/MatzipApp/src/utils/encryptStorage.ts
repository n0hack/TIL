import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptStorage = async <T>(key: string, date: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(date));
};

const getEncryptStorage = async <T>(key: string): Promise<T | null> => {
  const storedDate = await EncryptedStorage.getItem(key);

  return storedDate ? JSON.parse(storedDate) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);

  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export { setEncryptStorage, getEncryptStorage, removeEncryptStorage };
