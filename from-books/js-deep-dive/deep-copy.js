const deepCopy = (obj) => {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => deepCopy(obj[key]));
  }
};

const person = {
  name: 'NoHack',
  address: {
    city: 'Seoul',
  },
};

deepCopy(person);
console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));
