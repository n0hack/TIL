function Marsupial(name, nocturnal) {
  // 생성자로 호출되어야 하므로, new 안 붙였을 시 인스턴스 반환
  if (!this instanceof Marsupial) {
    return new Marsupial(name, nocturnal);
  }
  this.name = name;
  this.isNocturnal = nocturnal;
}

// 공유 프로퍼티(프로토타입 메서드)를 만들면 성능이 개선 됨
Marsupial.prototype.isAwake = function (isNight) {
  return isNight === this.isNocturnal;
};
const maverick = new Marsupial('매버릭', true);
const slider = new Marsupial('슬라이더', false);

let isNightTime = true;

console.log(maverick.isAwake(isNightTime));
console.log(slider.isAwake(isNightTime));
// 같은 메서드 공유
console.log(maverick.isAwake === slider.isAwake);
