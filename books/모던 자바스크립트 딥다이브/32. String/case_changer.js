const snakeToCamel = (str) => {
  return str.replace(/_\w/g, (match) => {
    return match[1].toUpperCase();
  });
};

const camelToSnake = (str) => {
  return str.replace(/.[A-Z]/g, (match) => {
    return match[0] + '_' + match[1].toLowerCase();
  });
};

const snake = 'hello_world';
const camel = 'helloWorld';
console.log(snakeToCamel(snake));
console.log(camelToSnake(camel));
