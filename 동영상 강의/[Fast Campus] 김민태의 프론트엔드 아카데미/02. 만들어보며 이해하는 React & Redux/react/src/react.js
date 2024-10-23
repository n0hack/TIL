const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) => element.setAttribute(name, value));

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return { ...props, children: children.length === 1 ? children[0] : children };
}

// hook의 구조는 컴포넌트 순서에 의존한다.
function useState(initValue) {
  let position = currentComponent - 1;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
  // props가 없는 경우에 대한 처리
  props = props || {};

  // 함수인 경우에 대한 처리
  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    }

    hooks[currentComponent] = null;
    currentComponent++;

    if (children.length > 0) {
      return tag(makeProps(props, children));
    } else {
      return tag(props);
    }
  }

  return { tag, props, children };
}

export const render = (function () {
  // 클로저를 이용해 vdom 비교
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    // diff (변경사항만 체크해서 업데이트)

    container.appendChild(createDOM(vdom));
  };
})();
