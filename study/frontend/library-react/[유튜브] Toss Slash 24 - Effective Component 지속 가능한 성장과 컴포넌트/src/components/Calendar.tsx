import { useCalendar } from './hooks/useCalendar';

function format(v: string) {
  return v;
}

function getDate(v: number) {
  return v;
}

export default function Calendar() {
  // 다른 달력을 만들고 싶다면 useCalendar만 가져다 쓰면 된다.
  // 계산 자체를 Hooks에 위임 (UI라는 관심사를 분리)
  const { headers, body, view } = useCalendar();

  // Calendar 컴포넌트는 Hooks에서 받아온 값을 어떻게 보여줄지만 정하면 된다.
  return (
    <table>
      <thead>
        <tr>
          {headers.weekDays.map(({ key, value }) => (
            <th key={key}>{format(value)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.value.map(({ key, value: days }) => (
          <tr key={key}>
            {days.map(({ key, value }) => (
              <td key={key}>{getDate(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
