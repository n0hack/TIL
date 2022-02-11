function Person(name) {
  this.name = name;
}
Person.prototype.greeting = function () {
  console.log(`Hello, My name is ${this.name} (${this.job})`);
};

function Teacher(name, job) {
  Person.call(this, name);
  this.job = job;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

const human = new Teacher('Serah', 'Teacher');
human.greeting();
