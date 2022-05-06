const initialState = [];

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({ text: action.text, completed: false });
    case 'TOGGLE_TODO':
      console.log(state, action.index);
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default todos;
