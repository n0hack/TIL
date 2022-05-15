var Conference = Conference || {};

Conference.attendee = function (firstName, lastName) {
  const first = firstName || 'None';
  const last = lastName || 'None';
  let checkedIn = false;

  return {
    getFullName: function () {
      return `${first} ${last}`;
    },
    isCheckedIn: function () {
      return checkedIn;
    },
    checkIn: function () {
      checkedIn = true;
    },
  };
};

Conference.attendeeCollection = function () {
  const attendees = [];

  return {
    contains: function (attendee) {
      return attendees.indexOf(attendee) > -1;
    },
    add: function (attendee) {
      if (!this.contains(attendee)) {
        attendees.push(attendee);
      }
    },
    remove: function (attendee) {
      const index = attendees.indexOf(attendee) > -1;
      if (index > -1) {
        attendees.splice(index, 1);
      }
    },
    iterate: function (callback) {
      // 각 참가자에 대해 콜백 실행
      attendees.forEach(callback);
    },
  };
};

Conference.checkInRecorder = function () {
  return {
    recordCheckIn: function (attendee) {
      // 외부 서비스를 통해 체크인 등록한다
    },
  };
};

Conference.checkInService = function (checkInRecorder) {
  let recorder = checkInRecorder;

  return {
    checkIn: function (attendee) {
      attendee.checkIn();
      recorder.recordCheckIn(attendee);
    },
  };
};
