/* @jsx createElement */
// babel에 의해 jsx 코드는 createElement 함수로 변환된다.
// 코드상으로는 createElement를 사용하고 있지 않지만, 번들에서는 포함하고 있기에 불러와야 한다.
import { Component, createElement, render } from './react';

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

// function Title(props) {
//   return <h1>{props.children}</h1>;
// }

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => (
  <div>
    <Title>React 잘 만들기</Title>
    <ul>
      <Item color="red">첫 번째 아이템</Item>
      <Item color="blue">두 번째 아이템</Item>
      <Item color="green">세 번째 아이템</Item>
    </ul>
  </div>
);

render(<App />, document.querySelector('#root'));
