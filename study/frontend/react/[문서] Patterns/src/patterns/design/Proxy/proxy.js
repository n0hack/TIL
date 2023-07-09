const person = {
  name: 'Lucid',
  age: 28,
  nationality: 'Korea',
};

// 개체에 접근할 때마다 중계자를 통해 개체에 접근하도록 하는 패턴
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    // 유효성 검사
    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist on the target object`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === 'name' && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  },
});

export default personProxy;
