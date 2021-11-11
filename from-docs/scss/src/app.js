import './app.scss';

class Test {
  #p;

  constructor() {
    this.#p = 'class';
  }

  greeting() {
    console.log(`Hello I'm ${this.#p}`);
  }
}

const hello = () => {
  console.log('Hello Webpack !');
};
hello();

new Test().greeting();
