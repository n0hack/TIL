import { FlatList, StyleSheet, View } from 'react-native';
import { Todo, TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export { TodoList };
