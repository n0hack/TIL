var firstName = 'Peter';
lastName = 'Ally';

function showFullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

var person = {
  firstName: 'Penelope',
  lastName: 'Barrymore',
  showFullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

showFullName();
// window.showFullName();
person.showFullName();

// apply, call, bind는 context를 변경하는 메소드
// context란, John is the winner who returned the money에서 John을 의미

var user = {
  data: [
    { name: 'T. Woods', age: 37 },
    { name: 'P. Mickelson', age: 43 },
  ],
  clickHandler: function (event) {
    // 비트연산을 통해 소수를 지움
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1;
    console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age);
  },
};
