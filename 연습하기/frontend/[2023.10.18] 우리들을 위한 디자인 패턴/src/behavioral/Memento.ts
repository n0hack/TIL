// 현재 상태를 나중에 원복할 수 있도록 저장하는 패턴
namespace Memento {
  class EditorMemento {
    constructor(protected content: string) {}

    getContent(): string {
      return this.content;
    }
  }

  class Editor {
    protected content = '';

    type(words: string): void {
      this.content = `${this.content} ${words}`;
    }

    getContent(): string {
      return this.content;
    }

    save(): EditorMemento {
      return new EditorMemento(this.content);
    }

    restore(memento: EditorMemento): void {
      this.content = memento.getContent();
    }
  }

  const editor = new Editor();

  // Type some stuff
  editor.type('This is the first sentence.');
  editor.type('This is second.');

  // Save the state to restore to : This is the first sentence. This is second.
  const saved = editor.save();

  // Type some more
  editor.type('And this is third.');

  // Output: Content before Saving
  console.log(editor.getContent());

  // Restoring to last saved state
  editor.restore(saved);
}
