function createReservation(passenger, flight, saver) {
  const reservation = {
    passengeInfo: passenger,
    flightInfo: flight,
  };

  saver.saveReservation(reservation);

  return reservation;
}

function ReservationSaver() {
  this.saveReservation = function (reservation) {};
}
