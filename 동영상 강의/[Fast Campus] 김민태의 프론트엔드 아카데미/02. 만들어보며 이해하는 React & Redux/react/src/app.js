/* @jsx createElement */
// babel에 의해 jsx 코드는 createElement 함수로 변환된다.
// 코드상으로는 createElement를 사용하고 있지 않지만, 번들에서는 포함하고 있기에 불러와야 한다.
import { createElement, render } from './react';

const vdom = (
  <div>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:blue">두 번째 아이템</li>
      <li style="color:green">세 번째 아이템</li>
    </ul>
  </div>
);

render(vdom, document.querySelector('#root'));
