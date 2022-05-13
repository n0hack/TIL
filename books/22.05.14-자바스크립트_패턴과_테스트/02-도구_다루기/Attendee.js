// 의존성 주입
Attendee = function (service, messenger, attendeeId) {
  // new로 생성하도록 강제
  if (!this instanceof Attendee) {
    return new Attendee(attendeeId);
  }

  this.attendeeId = attendeeId;

  this.service = service;
  this.messenger = messenger;
};

Attendee.prototype.reserve = function (sessionId) {
  if (this.service.reserve(this.attendeeId, sessionId)) {
    // prettier-ignore
    this.messenger.success('좌석 예약이 완료되었습니다.!' + ' 고객님은 ' + this.service.getRemainingReservations() + ' 좌석을 추가 예약하실 수 있습니다.')
  } else {
    this.messenger.failure('죄송합니다, 해당 좌석은 예약하실 수 없습니다.');
  }
};
