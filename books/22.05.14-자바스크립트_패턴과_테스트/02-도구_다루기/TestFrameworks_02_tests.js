describe('createReservation(passenger, flight)', function () {
  let testPassenger = null;
  let testFlight = null;
  let testReservation = null;

  beforeEach(function () {
    testPassenger = {
      firstName: '지훈',
      lastName: '전',
    };

    testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산',
    };

    testReservation = createReservation(testPassenger, testFlight);
  });

  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다', function () {
    expect(testReservation.passengeInfo).toBe(testPassenger);
  });

  it('주어진 flight를 flightInfo 프로퍼티에 할당한다', function () {
    expect(testReservation.flightInfo).toBe(testFlight);
  });
});
