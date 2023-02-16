describe('Calculation', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('two plus two is not five', () => {
    expect(2 + 2).not.toBe(5);
  });
});
