describe('spy', () => {
  let foo, bar;

  beforeEach(() => {
    foo = {
      setBar(value) {
        bar = value;
      },
    };

    jest.spyOn(foo, 'setBar');
    foo.setBar(123);
  });

  it('호출 여부를 관리한다.', () => {
    expect(foo.setBar).toHaveBeenCalled();
  });
});
