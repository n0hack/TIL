describe('Describe: sum 함수', () => {
  test('Test: 1 + 2 = 3이다.', () => {
    expect(1 + 2).toBe(3);
  });

  test('Test: 1 + 2 = 4가 아니다.', () => {
    expect(1 + 2).not.toBe(4);
  });

  test('Test: Mock 함수는 10을 반환한다.', () => {
    const mockFunction = jest.fn();
    mockFunction.mockReturnValue(10);

    expect(mockFunction()).toBe(10);
  });

  test('Test: Mock 함수는 2번 호출된다.', () => {
    const mockFunction = jest.fn();
    mockFunction();
    mockFunction();

    expect(mockFunction).toBeCalledTimes(2);
  });
});
