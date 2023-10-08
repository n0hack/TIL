const person = {
  name: 'Lucid',
  address: {
    city: 'Gimpo',
  },
};

Object.freeze(person);
console.log(person);
console.log('동결 여부: ' + Object.isFrozen(person));

const deepFreeze = (target) => {
  if (target && typeof target === 'object') {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
};

deepFreeze(person);
console.log('동결 여부: ' + Object.isFrozen(person.address));
person.address.city = 'Seoul';
console.log(person);
