import { AddTodo } from './components/AddTodo';
import { DateHead } from './components/DateHead';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Empty } from './components/Empty';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { TodoList } from './components/TodoList';
import { Todo } from './components/TodoItem';
import todosStorage from './storages/todosStorage';

const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);

  const handleInsert = (text: string) => {
    const nextId =
      todos.length > 1 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = { id: nextId, text, done: false };
    setTodos([...todos, todo]);
  };

  const handleToggle = (id: number) => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(nextTodos);
  };

  const handleRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'height' })}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList
              todos={todos}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          )}
          <AddTodo onInsert={handleInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
