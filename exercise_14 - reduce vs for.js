// reduce() ช่วยในการรวมค่าของ array ได้ โดยสามารถระบุค่าเริ่มต้นได้ ในตัวอย่างที่นี้คือ 0 มักใช้ในการรวมค่าของ array ที่มี object ซึ่งมี key ชื่อ distance โดยการรวมค่าของ distance ทุกตัวใน array นั้น

// โจทย์ ระยะทางที่เดินทาง ใช้ตัวช่วย 'reduce' เพื่อค้นหาผลรวมของระยะทางทั้งหมดที่เดินทาง กำหนดผลลัพธ์ให้กับตัวแปร 'totalDistance
const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

const totalDistance = trips.reduce(function (sum, trip) {
  return trip.distance + sum;
}, 0);
console.log(totalDistance); // 47

// ตัวอย่างการหาคารวมของ array โดยไม่ใช้ reduce() ใน es6 และใช้ for loop
var distances = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var sum = 0;

for (var i = 0; i < distances.length; i++) {
  sum += distances[i].distance;
}
console.log(sum); // 47 ผลลัพธ์ที่ได้จากการใช้ reduce() และ for loop จะเท่ากับ 47 ทั้งคู่ ดังนั้นเราสามารถใช้ reduce() ในการรวมค่าของ array ได้ง่ายขึขึ้นและลดความซับซ้อนได้ดีกว่า for loop
// ถ้าใช้ reduce()
const distancestest = distances.reduce(function (sums, distance) {
  return sums + distance.distance;
}, 10);
console.log(distancestest); // 57
// 57 เป็นค่าที่ได้จากการรวมค่าของ array โดยใช้ reduce() โดยกำหนดค่าเริ่มต้นเป็น(default value) = 10

// example primaryColors
var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

var previousColors = primaryColors.reduce(
  function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
  },
  ['green']
);
console.log(previousColors); // ['green', 'red', 'yellow', 'blue'] ผลลัพธ์ที่ได้จากการใช้ reduce() คือ ['green', 'red', 'yellow', 'blue'] โดยเริ่มต้นด้วยค่า ['green'] และเพิ่มค่าของ color จาก primaryColors ทุกตัว
