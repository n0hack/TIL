// Action
const ADD = "todos/ADD" as const;
const EDIT = "todos/EDIT" as const;
const TOGGLE = "todos/TOGGLE" as const;
const REMOVE = "todos/REMOVE" as const;

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface IState {
  todos: ITodo[];
  visibilityFilter: string;
}

export const addTodo = (text: string) => ({ type: ADD, text });
export const editTodo = (id: number, text: string) => ({
  type: EDIT,
  id,
  text,
});
export const toggleTodo = (id: number) => ({ type: TOGGLE, id });
export const removeTodo = (id: number) => ({ type: REMOVE, id });

let id = 3;
const initialState: IState = {
  todos: [
    { id: 1, text: "Eat Food", completed: true },
    { id: 2, text: "Exercise", completed: false },
  ],
  visibilityFilter: "SHOW_COMPLETED",
};

// 반환값 추론
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

function todos(state = initialState, action: TodosAction) {
  switch (action.type) {
    case "todos/ADD":
      const todo: ITodo = { id: id++, text: action.text, completed: false };
      return { ...state, todos: state.todos.concat(todo) };
    case "todos/EDIT":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    case "todos/TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "todos/REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
