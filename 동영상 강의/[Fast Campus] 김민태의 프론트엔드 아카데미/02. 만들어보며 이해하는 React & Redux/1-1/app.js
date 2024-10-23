// NOTE
// 변경 범위와 테스트 범위는 항상 동일하게 가져가야 한다.
// 소프트웨어는 현실의 문제를 해결하기 위해 만들지만, 빠르게 변화하기 때문에 소프트웨어가 변경에 취약하지 않도록 고민해야 한다.

function createH1(props) {
  return [document.createElement('h1')].map((element) => {
    Object.entries({ ...props, 'data-id': 'subject' }).forEach(([name, value]) => element.setAttribute(name, value));
    return element;
  })[0];
}

function createDiv(props) {
  return [document.createElement('h1')].map((element) => {
    Object.entries({ ...props, 'data-id': 'layout' }).forEach(([name, value]) => element.setAttribute(name, value));
    return element;
  })[0];
}

const creatorMap = {
  h1: createH1,
  div: createDiv,
};

// NOTE 커링하는 이유
// 그냥 내부에서 특정한 객체를 참조하는 식으로 사용하면, 해당 객체이 변경되었을 때 변경에 취약해진다.
const coupler = (map) => (type, props) => map[type](props);
const createElement = coupler(creatorMap);
