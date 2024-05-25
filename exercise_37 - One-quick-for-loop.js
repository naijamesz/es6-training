// for ใช้ในการวนลูปตามค่า index ของ array
// forEach ใช้ในการวนลูปตามค่าของ array โดยไม่สนใจ index หรือจะให้ง่ายๆคือเพื่อเข้าถึงข้อมูลใน array ต่างๆ โดยไม่ต้องประกาศค่า index ในการวนลูปตัั้งแต่เริ่มต้นจนถึง index สุดท้ายใน array
// for...in นั้นใช้ในการวนลูปสำหรับ Object ซ฿่งจะได้ key ของ Object ออกมา แต่ไม่ใช่ value ของ key นั้นๆ และไม่สามารถใช้กับ Array ได้ ** ได้เฉพาะ key หรือ properties ของ Object นั้นๆ เท่านั้นไจะไม่ได้รับ value

// for...of ตัวนี้จะใช้งานได้กับ iterable object(Object ที่วนลูปได้) หมายความว่าอะไรก็ตามที่สามารถวนลูปได้
// ***จะสามารถใช้ for…of ได้นั่นเอง เช่น Array, set หรือแม้แต่ string ก็สามารถใช้ได้***

// วนลูป array ด้วย for...of

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  // ใช้ for...of ในการวนลูป array colors แทนการใช้ forEach เพราะ forEach จะไม่สามารถใช้ break หรือ continue ได้ และไม่สามารถ return ค่าออกมาได้ รวมถึงใช้แทนการใช้ for...in ได้ที่ไม่ต้องเขียนเงื่อนไขเพื่อตรวจสอบว่า key ที่วนลูปอยู่เป็น key ของ array หรือไม่
  console.log(color); // red, green, blue
}

const numbers = [1, 2, 3, 4];
let total = 0;
for (let number of numbers) {
  // ใช้ for...of ในการวนลูป array numbers แทนการใช้ for...in เพราะ for...in จะวนลูป key ของ array แทน
  total += number;
}
console.log(total); // 10

// ใช้ for...of กับ string
let str = 'hello';
for (const iterator of str) {
  console.log(iterator); // h, e, l, l, o
}
/* Output
'h',
'e',
'l',
'l',
'o'
*/

// ใช้ for...of กับ Set ที่เป็น iterable object ที่สามารถวนลูปได้ โดยไม่ต้องใช้ index โดย Set จะไม่มี indexและทำหน้าที่เหมือนกับ array แต่ไม่มี index
// มักใช้ในกรณีที่ต้องการเก็บข้อมูลที่ไม่ซ้ำกัน
const set = new Set([1, 2, 3, 4]);
for (const iterator of set) {
  console.log(iterator); // 1, 2, 3, 4
}

// ใช้ for...of กับ Map ที่ก็เป็น iterable object ที่สามารถวนลูปได้โดยไม่ต้องใช้ index
// โดย Map นี้ไม่ใช่ .map()ที่เป็น method ของ array แต่เป็น object ที่เก็บข้อมูลในรูปแบบ key-value โดย key จะเป็นอะไรก็ได้ และ value ก็เป็นอะไรก็ได้ มักใช้ในกรณีของการเก็บข้อมูลที่มี key และ value ที่ต้องการเข้าถึงได้ง่าย เช่น การเก็บข้อมูลของ user ที่มี key เป็น id และ value เป็นชื่อของ user
const map = new Map([
  ['name', 'John'],
  ['age', 30],
  ['address', 'Bangkok']
]);
for (const iterator of map) {
  console.log(iterator); // ['name', 'John'], ['age', 30], ['address', 'Bangkok']
}
console.log(map);

// มาลองใช้ลองทำความเข้าใจว่า matrix มีการเก็บข้อมูลในรูปแบบของ array ซ้อน array หรือ array ที่มี array ซ้อนอยู่จะเป็นอย่างไรและใช้ for...of ในการวนลูป matrix ได้หรือไม่
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (const iterator of matrix) {
  console.log(iterator); // [1, 2, 3], [4, 5, 6], [7, 8, 9]
}
// แล้วถ้าใช้ for...in จะได้อย่างไร
for (const iterator in matrix) {
  console.log(iterator); // 0, 1, 2
}
// เท่านี้ก็จะเห็นความแตกต่างระหว่าง for...of กับ for...in ได้ชัดเจนขึ้น

// ใช้ for...of กับ arguments object ที่เป็น iterable object ที่สามารถวนลูปได้โดยไม่ต้องใช้ index
// โดย arguments object จะเป็น object ที่เก็บ argument ที่ส่งเข้ามาใน function และเป็น iterable object ที่สามารถวนลูปได้
function sum() {
  let total = 0;
  for (const iterator of arguments) {
    total += iterator;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 9)); // 19

// ใช้ for...of กับ NodeList ที่เป็น iterable object ที่สามารถวนลูปได้โดยไม่ต้องใช้ index โดย NodeList จะเป็น object ที่เก็บ element ที่เลือกมาจาก DOM โดยใช้ method เช่น querySelectorAll
// ตัวอย่าง
const divs = document.querySelectorAll('div');
for (const iterator of divs) {
  console.log(iterator); // จะแสดง element ที่เลือกมาจาก DOM
}
