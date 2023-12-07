export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) => element.setAttribute(name, value));

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(tag, props, ...children) {
  // null에 대한 방어 코드
  props = props || {};

  // 함수인 경우에 대한 처리
  if (typeof tag === 'function') {
    if (children.length > 0) {
      return tag({ ...props, children: children.length === 1 ? children[0] : children });
    } else {
      return tag(props);
    }
  } else {
    return { tag, props, children };
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
