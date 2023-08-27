// Spring 등에서는 데이터 가공을 비롯한 로직들이 Service에 담긴다
export default class Model {
  constructor() {
    this.todoList = [
      {
        id: 0,
        text: 'todo',
      },
    ];
  }

  addTodo(todo) {
    this.todoList = [...this.todoList, todo];
  }

  get reverseTodoList() {
    return [...this.todoList].reverse();
  }
}
