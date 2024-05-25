// What is a generator in JavaScript? คือ function ที่สามารถหยุดการทำงานได้ และสามารถเริ่มต้นทำงานอีกครั้งได้
// syntax ของ generator เป็นอย่้างไร?
// ใช้ * หน้า function และใช้ yield เพื่อหยุดการทำงาน
// What does a generator do?
// Iteration with Generators
// Generator delegation
// Generators with symbol.iterator

function* numbersFirst() {
  // yield ที่มี Valueคือ 1แสดงถึงการหยุดการทำงาน โดยจะรีเทิร์นผลลัพธ์ออกมาเป็นมาเป็น { value: 1, done: false } done คือ false แสดงว่ายังไม่หยุดการทำงาน หากเป็น true แสดงว่าหยุดการทำงาน
  yield 1;
}

const gen = numbersFirst();
console.log(gen.next()); // { value: 1, done: false } // false แสดงว่ายังไม่หยุดการทำงาน
console.log(gen.next()); // { value: undefined, done: true } // true แสดงว่าฟังก์ชันหยุดการทำงานแล้ว
console.log(gen.next()); // { value: undefined, done: true } // true แสดงว่าฟังก์ชันหยุดการทำงานแล้ว

// จงสร้าง generator function ที่สร้าง iterator ที่วนลูปเลข 1 ถึง 5 แล้วหยุดการทำงาน
function* numbers() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

// ใช้generatrเล่าเรื่องการเดินทางไปซื้อของที่ร้านค้า
function* shopping(i) {
  // stuff on the sidewalk // สิ่งของบนทางเดิน
  // walking down the sidewalk // เดินลงทางเดิน
  // go into the store with cash // เข้าร้านพร้อมเงินสด
  const stuffFromStore = yield 'cash';
  // walking to laundry place // เดินไปที่ร้านซักรีด
  const cleanClothes = yield 'laundry';
  // walking back home // เดินกลับบ้าน
  yield i + 10;
  return [stuffFromStore, cleanClothes];
}

// stuff on the sidewalk
const generate = shopping(10);
// leaving our house
console.log(generate.next()); // { value: 'cash', done: false }
// walked into the store
// walking up and down the aisles
// purchase our stuff
// leaving the store with groceries
console.log(generate.next('groceries')); // { value: 'groceries', done: true }
console.log(generate.next('clean clothes')); // { value: [ 'groceries', 'clean clothes' ], done: true }
console.log(generate.next().value); // undefined

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}
// const generateColors = colors();
// console.log(generateColors.next().value); // red
// console.log(generateColors.next().value); // blue
// console.log(generateColors.next().value); // green
// console.log(generateColors.next().value); // undefined

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
console.log(myColors); // [ 'red', 'blue', 'green' ]
