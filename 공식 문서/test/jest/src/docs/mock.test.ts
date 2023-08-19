import { forEach } from './forEach';
import axios from 'axios';
import User from './user';

const items = [1, 2, 3, 4, 5];

jest.mock('axios');

describe('forEach 함수', () => {
  const mockCallback = jest.fn((x: number) => 42 + x);
  forEach(items, mockCallback);

  test('함수가 5번 호출된다.', () => {
    expect(mockCallback.mock.calls).toHaveLength(5);
  });

  test('첫번째 인자는 1이다.', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(1);
  });

  test('두번째 인자는 2이다.', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(2);
  });

  test('두 번째 인자의 결과는 43이다.', () => {
    expect(mockCallback.mock.results[1].value).toBe(44);
  });

  test('마지막 인자는 5이다.', () => {
    expect(mockCallback.mock.lastCall?.[0]).toBe(5);
  });
});

describe('mocking 함수', () => {
  const myMock = jest.fn();
  myMock.mockReturnValue('default').mockReturnValueOnce('first').mockReturnValueOnce('second');

  console.log(myMock(), myMock(), myMock(), myMock());

  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  console.log(result);
  console.log(filterTestFn.mock.calls[0][0]);
  console.log(filterTestFn.mock.calls[1][0]);
});

describe('axios 모킹', () => {
  // const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    // 가짜 응답 반환
    (axios.get as jest.Mock).mockResolvedValue(resp);
    // mockedAxios.get.mockResolvedValue(resp);
    // mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

    return User.all().then((data) => expect(data).toEqual(users));
  });
});

const myMockFn = jest.fn().mockName('모킹 함수');
console.log(myMockFn.getMockName());
