const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { id: nextId++, text },
});
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

function todos(state: TodosState = initialState, action: TodosAction) {
  switch (action.type) {
    case "todos/ADD_TODO":
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case "todos/TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "todos/REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
