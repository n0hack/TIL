function BlackDog() {
  this.name = '흰둥이';

  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name);
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark();
