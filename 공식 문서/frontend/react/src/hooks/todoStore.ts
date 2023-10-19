let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners: ((...args: unknown[]) => unknown)[] = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: `Todo #${nextId}` }];
    emitChange();
  },
  subscribe(listener: (...args: unknown[]) => unknown) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  listeners.forEach((listener) => listener());
}
