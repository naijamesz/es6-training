// .map() คือ array method ตัวหนึ่งที่ใช้วนค่าทุกค่าใน array และ return ค่าใหม่ออกมาในรูปของ array ใหม่ เช่นมีข้อมูลในอาเรย์ 1, 2, 3 แล้วใช้ .map() แล้วคูณทุกค่าใน array ด้วย 2 จะได้ array ใหม่ออกมาเป็น 2, 4, 6
const multiNumbers = [1, 2, 3];
const doubled = multiNumbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6]
// ในที่นี้เราใช้ .map() ในการเพิ่มค่าใน array แล้วเก็บค่าใหม่ไว้ในตัวแปร doubled

// ว่าแต่ .map() ตัวมันเองไม่ได้เปลี่ยนแปลงค่าใน array ตัวเดิม แต่จะ return ค่าใหม่ออกมาในรูปของ array ใหม่ และเราสามารถเก็บค่าใหม่นั้นไว้ในตัวแปรได้
// แล้ว .map()มันแตกต่างจาก .forEach() อย่างไร
// ตัวอย่าง
let receipt = [
  { name: 'sausage', price: 42 },

  { name: 'coffee', price: 32 },

  { name: 'orange', price: 20 }
];

// .map()
items = receipt.map(receipt => {
  return receipt.name;
});
console.log(items); // [sausage, coffee, orange]

// ส่วน .forEach()
items2 = receipt.forEach(receipt => {
  items2.push(receipt.name);
});
console.log(items2); // [sausage, coffee, orange]`

// สังเกตุถึงความต่างระหว่างทั้งคู่ได้ชัดเจนเลยว่าแม้จะได้ผลลัพธ์แบบเดียวกันแต่ forEach จะไม่สามารถเก็บค่าใหม่ได้เหมือนกับที่ map() ที่สามารถเก็บค่าใหม่ได้
// ดังนั้นเพื่อให้ได้ผลลัพธ์แบบเดียวกับ map() จึงต้องใช้ .push() เพื่อเก็บค่าใหม่เข้าไปใน array ใหม่

const images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' }
];
// Using map
// const heights = images.map(function (image) {
//   return image.height;
// });

// Using arrow function and map
const heights = images.map(image => image.height);
console.log(heights);

// In tihis case used for loop
const numbers = [1, 2, 3];
const doubledNumbers = [];
for (const i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// Exercise 4
let cars = [
  {
    model: 'Buick',
    price: 'CHEAP'
  },
  {
    model: 'Camero',
    price: 'expnsive'
  }
];

let prices = cars.map(function (car) {
  return car.price;
});
console.log(cars);
