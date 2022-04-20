// 되도록이면 타입스크립트가 알아서 추론하도록 하면 편함
// 최소한으로만 타입을 명시하자

// type aliasing
// 과하게 할 필요는 없음
type Age = number;
type Name = string;
type Player = { name: Name; age?: Age };

const nico: Player = {
  name: 'nico',
};

const lynn: Player = {
  name: 'lynn',
  age: 12,
};

function playerMaker(name: string, age?: number): Player {
  if (age !== undefined) {
    return { name, age };
  } else {
    return { name };
  }
}

const playerMakerArrowF = (name: string): Player => ({ name });

const nohack = playerMaker('nohack');
console.log(nohack);
