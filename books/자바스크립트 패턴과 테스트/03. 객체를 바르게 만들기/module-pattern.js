var MyApp = MyApp || {};

MyApp.wildlifePreserveSimulator = function (animalMaker) {
  var animals = [];

  // API 반환
  return {
    addAnimal: function (species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function () {
      return animals.length;
    },
  };
};
var preserve = MyApp.wildlifePreserveSimulator(realAnimalMaker);
preserve.addAnimal(gorilla, female);

// 싱글톤 모듈 (즉시 실행 함수)
MyApp.WildlifePreserveSimulator = (function () {
  ㅔ;
  var animals = [];

  // API 반환
  return {
    addAnimal: function (species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function () {
      return animals.length;
    },
  };
})();
MyApp.WildlifePreserveSimulator.addAnimal(realAnimalMaker, gorilla, female);
