const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'peanut butter';
      resolve(data);
    }, 1000);
  });
};

test('[promise] the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

test('[async] the data is peanut butter', async () => {
  expect.assertions(1); // 특정 수의 assertion이 호출되었는지 확인
  const data = await fetchData();
  expect(data).toBe('peanut butter'); // 이 expect 구문 하나하나를 assertion으로 취급
});

test('[resolves] the fetch fails with an error', () => {
  // assetion을 반환하지 않으면, then이 수행되기 전에 테스트가 끝남
  return expect(fetchData()).resolves.toBe('peanut butter');
});
