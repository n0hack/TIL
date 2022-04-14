let message = 'Hello World';
console.log(message);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());
