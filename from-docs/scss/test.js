this.name = '검둥이';

const dog = {
  name: '흰둥이',
  greeting: () => {
    console.log(`안녕! 내 이름은 ${this.name}야`);
  },
  greeting2() {
    console.log(`안녕! 내 이름은 ${this.name}야`);
  },
};

dog.greeting();
dog.greeting2();
