export const useCalendar = () => {
  const headers = {
    weekDays: [
      { key: 'sun', value: '일' },
      { key: 'mon', value: '월' },
      { key: 'tue', value: '화' },
      { key: 'wed', value: '수' },
      { key: 'thu', value: '목' },
      { key: 'fri', value: '금' },
      { key: 'sat', value: '토' },
    ],
  };
  const body = {
    value: [
      {
        key: '1',
        value: [
          { key: '1', value: 1 },
          { key: '2', value: 2 },
          { key: '3', value: 3 },
          { key: '4', value: 4 },
          { key: '5', value: 5 },
          { key: '6', value: 6 },
          { key: '7', value: 7 },
        ],
      },
      {
        key: '2',
        value: [
          { key: '8', value: 8 },
          { key: '9', value: 9 },
          { key: '10', value: 10 },
          { key: '11', value: 11 },
          { key: '12', value: 12 },
          { key: '13', value: 13 },
          { key: '14', value: 14 },
        ],
      },
    ],
  };
  const view = 'month';

  return { headers, body, view };
};
