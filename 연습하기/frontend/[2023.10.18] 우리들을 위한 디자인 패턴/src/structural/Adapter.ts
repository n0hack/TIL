// 호환되지 않는 객체를 어댑터로 감싸, 사용 가능하게 만들어주는 패턴
interface Lion {
  roar(): void;
}

interface AfricanLion extends Lion {
  roar(): void;
}

interface AsianLion extends Lion {
  roar(): void;
}

class Hunter {
  hunt(lion: Lion) {
    lion.roar();
  }
}

class WildDog {
  bark() {
    console.log('WildDog is barking');
  }
}

class WildDogAdapter implements Lion {
  dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
