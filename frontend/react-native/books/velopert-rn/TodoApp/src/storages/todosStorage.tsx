import AsyncStorage from '@react-native-community/async-storage';
import { Todo } from '../components/TodoItem';

class TodosStorage {
  key = 'todos';

  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(this.key);

      if (!rawTodos) {
        throw new Error('No saved todos');
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  }

  async set(data: Todo[]) {
    try {
      await AsyncStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  }
}

export default new TodosStorage();
