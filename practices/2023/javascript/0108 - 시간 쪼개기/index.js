import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

console.clear();

const schedules = [
  {
    landingAt: "2023-01-08T07:00:00",
    departureAt: "2023-01-08T07:05:00",
    arrivalAt: "2023-01-08T08:37:00",
    takeOffAt: "2023-01-08T08:52:00",
    aircraftItemId: 2,
    arrivalPortId: 8,
    departurePortId: 1,
  },
  // {
  //   landingAt: '2023-01-08T18:44:00',
  //   departureAt: '2023-01-08T18:59:00',
  //   arrivalAt: '2023-01-08T20:31:00',
  //   takeOffAt: '2023-01-08T20:46:00',
  //   aircraftItemId: 1,
  //   arrivalPortId: 8,
  //   departurePortId: 1,
  // },
];

const b = {
  1: [
    {
      firstLandingTime: "2023-01-08T07:00:00",
      lastLandingTime: "2023-01-08T11:21:00",
      lastTakeOffTime: "2022-01-08T12:53:00",
    },
    {
      firstLandingTime: "2023-01-08T13:50:00",
      lastLandingTime: "2023-01-08T18:44:00",
      lastTakeOffTime: "2022-01-08T20:45:00",
    },
  ],
  2: [
    {
      firstLandingTime: "2023-01-08T06:00:00",
      lastLandingTime: "2023-01-08T08:37:00",
      lastTakeOffTime: "2022-01-08T08:52:00",
    },
    {
      firstLandingTime: "2023-01-08T14:50:00",
      lastLandingTime: "2023-01-08T19:44:00",
      lastTakeOffTime: "2022-01-08T21:16:00",
    },
  ],
};

const originDate = dayjs("2023-01-08");
// 스케줄 로테이션
for (const schedule of schedules) {
  let { landingAt, takeOffAt, aircraftItemId } = schedule;
  landingAt = dayjs(landingAt);
  takeOffAt = dayjs(takeOffAt);

  // 기준 날짜와 다르다면 패스
  if (!originDate.isSame(dayjs(landingAt), "dates")) continue;

  console.log("스케줄:", schedule);
  const requestableTimes = b[aircraftItemId].map((requestableTime) => {
    let { firstLandingTime, lastLandingTime, lastTakeOffTime } = requestableTime;
    firstLandingTime = dayjs(firstLandingTime);
    lastLandingTime = dayjs(lastLandingTime);
    lastTakeOffTime = dayjs(lastTakeOffTime);

    // 총 비행시간 계산
    // console.log("gap: ", Math.abs(landingAt.diff(takeOffAt, "minutes")));

    // 범위에 들어있는지 체크
    if (firstLandingTime.isSameOrBefore(landingAt, "minutes") && lastLandingTime.isSameOrAfter(landingAt, "minutes")) {
      console.log("범위에 들어옴");
    }

    // console.log(firstLandingTime)

    // console.log("요청 가능 시간:", requestableTime);
  });

  // console.log(dayjs(landingAt).date());
  // console.log(originDate.isSame(dayjs(landingAt), 'dates'));
}
// const requestableTimes = b[aircraftItemId].map((requestableTime) => {

// });

// console.log(requestableTimes);

const newRequestableTime = [];

// console.log(a);
// console.log(b);
// console.log(newRequestableTime);
