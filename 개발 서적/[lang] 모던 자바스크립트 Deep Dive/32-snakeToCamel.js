/** @param str {string} */
const camelToSnake = (str) => {
  return str.replace(/.[A-Z]/g, (match) => {
    return match[0] + '_' + match[1].toLowerCase();
  });
};

/** @param str {string} */
const snakeToCamel = (str) => {
  return str.replace(/_[a-z]/g, (match) => match[1].toUpperCase());
};

const camelCase = 'helloWorld';
const snakeCase = 'hello_world';

console.log(camelToSnake(camelCase));
console.log(snakeToCamel(snakeCase));
