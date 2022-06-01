import { statement } from './01';
import { IInvoices, IPlays } from './types';

describe('내가 만든 첫 함수 테스트', () => {
  const plays: IPlays = { hamlet: { name: 'Hamlet', type: 'tragedy' } };
  const invoices: IInvoices = {
    customer: 'BigCo',
    performances: [{ playID: 'hamlet', audience: 55 }],
  };
});

// test('테스트 케이스', (done) => {
//   const results = ['', '', ''];

//   console.log(results[0]);
//   console.log(statement(invoices, plays));

//   expect(statement(invoices, plays)).toBe('');
// });
