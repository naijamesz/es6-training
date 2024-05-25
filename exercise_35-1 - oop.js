// Prototype Inheritance
// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function () {
//   return 'Vroom';
// };

// function Toyota(options) {
//   Car.call(this, options); // Car.call(this, options
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function () {
//   return 'beep';
// };

// const toyoda = new Toyota({ color: 'red', title: 'Daily Driver' });
// ('---');

// console.log(toyoda); // Toyota { title: 'Daily Driver', color: 'red' }
// console.log(toyoda.drive()); // 'Vroom'
// console.log(toyoda.honk()); // 'beep'

// const car = new Car({ title: 'Focus' });
// console.log(car.drive()); // 'Vroom'
// console.log(car); // { title: 'Focus' }

// Refactor within ES6 classes

class Car {
  // สร้างคลาสชื่อ Car
  constructor({ title }) {
    // กำหนด constructor ที่รับพารามิเตอร์เป็น object ที่มี property ชื่อ title
    this.title = title; // กำหนดค่าของ property title ให้เท่ากับค่าที่รับมา
  }
  drive() {
    // สร้างเมธอด drive
    return 'Vroom'; // เมื่อเรียกใช้เมธอด drive จะคืนค่า 'Vroom'
  }
}
class Toyota extends Car {
  // สร้างคลาส Toyota ที่สืบทอดจากคลาส Car

  constructor(options) {
    // กำหนด constructor ที่รับพารามิเตอร์เป็น object ที่มี property ต่างๆ
    super(options); // เรียก constructor ของคลาส Car ด้วยพารามิเตอร์ options
    this.color = options.color; // กำหนดค่าของ property color ให้เท่ากับค่าของ property color ใน object options
  }
  honk() {
    // สร้างเมธอด honk และทำการ return ค่า 'beep'
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
('-----');
console.log(toyota.honk); // 'beep'
console.log(toyota.drive());
console.log(toyota); // Toyota { title: 'Daily Driver', color: 'red' }
// const car = new Car({ title: 'Toyota' });
// console.log(car);
// console.log(car.drive);
// console.log(car.drive());
