const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

// คือการนำ distance หารด้วย time ของแต่ละ trip เพื่อหาความเร็วในการเดินทาง
const speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});
