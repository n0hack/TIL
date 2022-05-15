describe('Conference.attendeeCollection', () => {
  describe('contains(attendee)', () => {});

  describe('add(attendee)', () => {});

  describe('remove(attendee)', () => {});

  describe('iterate(callback)', () => {
    let collection, callbackSpy;

    // 도우미 함수
    function addAttendeesToCollection(attendeeArray) {
      attendeeArray.forEach((attendee) => collection.add(attendee));
    }

    function verifyCallbackWasExecutedForEachAttendee(attendeeArray) {
      // 각 원소마다 한 번씩 스파이가 호출되었는지 확인
      expect(callbackSpy.calls.count()).toBe(attendeeArray.length);
      let allCalls = callbackSpy.calls.all();
      for (let i = 0; i < allCalls.length; i++) {
        expect(allCalls[i].args[0]).toBe(attendeeArray[i]);
      }
    }

    beforeEach(() => {
      collection = Conference.attendeeCollection();
      callbackSpy = jasmine.createSpy();
    });

    it('빈 컬렉션에서는 콜백을 실행하지 않는다', () => {
      collection.iterate(callbackSpy);
      expect(callbackSpy).not.toHaveBeenCalled();
    });

    it('원소가 하나뿐인 컬렉션은 콜백을 한 번만 실행한다', () => {
      let attendees = [Conference.attendee('윤지', '김')];
      addAttendeesToCollection(attendees);
      collection.iterate(callbackSpy);
      verifyCallbackWasExecutedForEachAttendee(attendees);
    });

    it('컬렉션 원소마다 한 번씩 콜백을 실행한다', () => {
      let attendees = [
        Conference.attendee('윤지', '김'),
        Conference.attendee('지훈', '전'),
        Conference.attendee('영목', '윤'),
      ];
      addAttendeesToCollection(attendees);
      collection.iterate(callbackSpy);
      verifyCallbackWasExecutedForEachAttendee(attendees);
    });
  });
});

describe('Conference.checkInService', () => {
  let checkInService, checkInRecorder, attendee;

  beforeEach(() => {
    checkInRecorder = Conference.checkInRecorder();
    spyOn(checkInRecorder, 'recordCheckIn');
    // checkInRecorder를 주입하면서, 이 함수의 recordCheckIn 함수에 스파이를 심는다.
    checkInService = Conference.checkInService(checkInRecorder);
    attendee = Conference.attendee('형철', '서');
  });

  describe('checkInService.checkIn(attendee)', () => {
    it('참가자를 체크인 처리한 것으로 표시한다', () => {
      checkInService.checkIn(attendee);
      expect(attendee.isCheckedIn()).toBe(true);
    });

    it('체크인을 등록한다', () => {
      checkInService.checkIn(attendee);
      expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
    });
  });
});
