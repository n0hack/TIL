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
  {
    landingAt: "2023-01-08T18:44:00",
    departureAt: "2023-01-08T18:59:00",
    arrivalAt: "2023-01-08T20:31:00",
    takeOffAt: "2023-01-08T20:46:00",
    aircraftItemId: 2,
    arrivalPortId: 8,
    departurePortId: 1,
  },
];

const b = {
  1: [
    {
      firstLandingTime: "2023-01-08T07:00:00",
      lastLandingTime: "2023-01-08T11:21:00",
      lastTakeOffTime: "2023-01-08T12:53:00",
    },
    {
      firstLandingTime: "2023-01-08T13:50:00",
      lastLandingTime: "2023-01-08T18:44:00",
      lastTakeOffTime: "2023-01-08T20:45:00",
    },
  ],
  2: [
    {
      firstLandingTime: "2023-01-08T05:00:00",
      lastLandingTime: "2023-01-08T08:37:00",
      lastTakeOffTime: "2023-01-08T10:29:00",
    },
    {
      firstLandingTime: "2023-01-08T14:50:00",
      lastLandingTime: "2023-01-08T19:44:00",
      lastTakeOffTime: "2023-01-08T21:16:00",
    },
  ],
};

const flat = (arr) => {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flat(cur)];
    } else {
      return [...acc, cur];
    }
  }, []);
};

// 기본적인 비행시간도 받아야 할 듯.

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

    // 총 비행시간 계산 (이건 실제로 기본 시간 받아서 미리 가공해야 할 듯)
    const gap = Math.abs(landingAt.diff(takeOffAt, "minutes"));

    // 범위에 들어있는지 체크
    if (firstLandingTime.isSameOrBefore(landingAt, "minutes") && lastLandingTime.isSameOrAfter(landingAt, "minutes")) {
      const result = [];

      console.log("범위에 들어있는 요청 가능 시간:", requestableTime);
      console.log(gap);

      // before 가능한지
      const beforeLastLandingTime = landingAt.subtract(gap + 1, "m");

      // console.log("before");
      // console.log(firstLandingTime.format("YYYY-MM-DDTHH:mm:00"));
      // console.log(beforeLastLandingTime.format("YYYY-MM-DDTHH:mm:00"));
      // console.log(firstLandingTime.isSameOrBefore(beforeLastLandingTime, "minutes"));

      if (firstLandingTime.isSameOrBefore(beforeLastLandingTime, "minutes")) {
        result.push({
          firstLandingTime: firstLandingTime.format("YYYY-MM-DDTHH:mm:00"),
          lastLandingTime: beforeLastLandingTime.format("YYYY-MM-DDTHH:mm:00"),
          lastTakeOffTime: beforeLastLandingTime.add(gap, "m").format("YYYY-MM-DDTHH:mm:00"),
        });
      }

      // after 가능한지
      let afterTakeOffTime = takeOffAt.add(gap + 1, "m");

      // console.log("after");
      // console.log(afterTakeOffTime.format("YYYY-MM-DDTHH:mm:00"));
      // console.log(lastTakeOffTime.format("YYYY-MM-DDTHH:mm:00"));
      // console.log(afterTakeOffTime.isSameOrBefore(lastTakeOffTime, "minutes"));

      if (afterTakeOffTime.isSameOrBefore(lastTakeOffTime, "minutes")) {
        result.push({
          firstLandingTime: takeOffAt.add(1, "m").format("YYYY-MM-DDTHH:mm:00"),
          lastLandingTime: lastLandingTime.format("YYYY-MM-DDTHH:mm:00"),
          lastTakeOffTime: lastTakeOffTime.format("YYYY-MM-DDTHH:mm:00"),
        });
      }

      return result;
      // 앞뒤로 쪼개기 수행
    } else {
      return requestableTime;
    }
  });

  console.log("최종 결과: ", flat(requestableTimes));
}
