var MyApp = MyApp || {};

MyApp.Hand = function () {
  this.dataAboutHand = {};
};

MyApp.Hand.prototype.arrangeAndMove = function (sign) {
  this.dataAboutHand = '새로운 수화 동작';
};

MyApp.Human = function (handFactory) {
  this.hands = [handFactory(), handFactory()];
};
MyApp.Human.prototype.useSignLaguage = function (message) {
  var sign = {};
  this.hands.forEach((hand) => hand.arrangeAndMove(sign));
};

MyApp.Gorilla = function (handFactory) {
  this.hands = [handFactory(), handFactory()];
};

MyApp.TeachSignLanguageTokoko = (function () {
  var handFactory = function () {
    return new MyApp.Hand();
  };
  var trainer = new MyApp.Human(handFactory);
  var koko = new MyApp.Gorilla(handFactory);

  koko.useSignLaguage = trainer.useSignLaguage;
  console.log(koko.useSignLaguage('Hello'));
})();
