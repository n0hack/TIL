import Button from '../../src/button';

describe('button 컴포넌트', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('button 요소가 렌더링된다.', () => {
    const button = new Button(el);
    expect(el).toContainElement(button);
  });
});
