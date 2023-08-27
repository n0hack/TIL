export default class View {
  constructor() {
    const target = document.querySelector('main');
    this.$newEl = target.cloneNode(true);
    this.$newEl.innerHTML = this.getTemplate();
    target.replaceWith(this.$newEl);
  }

  addEvent(handlers) {
    this.$newEl.addEventListener('click', this.#runDomEvents(handlers), true);
  }

  #runDomEvents({ handleAddTodo, handleReverseTodo }) {
    return ({ target }) => {
      if (target.classList.contains('add_button')) {
        const $lastElement = this.$newEl.querySelector('li:last-child');
        const nextId = Number($lastElement.dataset.id) + 1;
        const todo = {
          id: nextId,
          text: `todo`,
        };
        handleAddTodo(todo);
      }
      if (target.classList.contains('reverse_button')) {
        handleReverseTodo();
      }
    };
  }

  getTemplate() {
    return `
      <ul></ul>
      <button class="add_button">Add</button>
      <button class="reverse_button">Reverse</button>
    `;
  }

  displayTodo(todoList) {
    const ul = this.$newEl.querySelector('ul');
    ul.innerHTML = `${todoList.map((todo) => `<li data-id="${todo.id}">${todo.text} ${todo.id}</li>`).join('')}`;
  }
}
