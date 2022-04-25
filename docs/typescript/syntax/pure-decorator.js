/**
 *
 * @param {*} target 현재 객체의 인스턴스
 * @param {*} key 데코레이터를 적용할 프로퍼티(문자열)
 * @param {*} descriptor 해당 속성의 디스크립터
 */
function readOnly(target, key, descriptor) {
  return {
    ...descriptor,
    writable: false,
  };
}

class Porridge {
  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }
  stir() {
    if (this.viscosity > 15) console.log('This is pretty thick stuff.');
    else console.log('Spoon goes round and round.');
  }
}

class Oatmeal extends Porridge {
  // @readOnly
  viscosity = 20;

  constructor(flavor) {
    super();
    this.flavor = flavor;
  }
}

const oatmeal = new Oatmeal('Brown Sugar Cinnamon');
console.log(oatmeal);
