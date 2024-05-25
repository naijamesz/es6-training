/*Refactoring Keyword Functions
The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.

Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:

If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
If the function has a single argument, the parentheses around the argument list can be removed*/
// refactor code from this
// const fibonacci = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// to this
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// fat arrow function
// const add = (a, b) => {
//   const sum = a + b;
//   // return a + b;
//   return sum;
// };
// console.log(add(1, 2)); // 3
// เหมือนกัน
const add = (a, b) => a + b;
const newSum = add(1, 2);
console.log(newSum); // 3

// Advance arrow function
// ให้ทำการ Refactor โค้ดด้านล่างให้สั้นลง
// const double = function (number) {
//   return 2 * number;
// };
// double(8); // 16
// ตัด function ออก และใช้ arrow ตัด return ออก(ต้องอยู่ในบรรทัดเดียวกันเท่านั้น)
const double = number => 2 * number;
console.log(double(8)); // 16
// กรณี 2 เงื่อนไข ให้ใส่วงเล็บ (เงื่อนไข1, เงื่อนไข2) => 2 * เงื่อนไข1 + 2 * เงื่อนไข2
const double2 = (number1, number2) => 2 * number1 + 2 * number2;
console.log(double(8, 10)); // 36

// กรณีใช้งานกับ array ให้ใช้ .map() เพื่อแสดงค่าใน array ทีละตัวแทนการใช้ for loop
const numbers = [1, 2, 3];
// ใช้ function ปกติ
// numbers.map(function (number) {
//   return 2 * number;
// })
// ใช้ arrow function
numbers.map(number => 2 * number);
console.log(numbers); // [2, 4, 6]

// When to use arrow function
const team = {
  members: ['Jame', 'John'],
  teamName: 'Super Squad',
  // ใช้ function ปกติ
  // teamSummary: function () {
  //   return this.members.map(
  //     function (member) {
  //       return `${member} is on team ${this.teamName}`;
  //     }.bind(this)
  //     // ถ้าไม่ใช้ bind(this) teamName จะเป็น undefined
  //   );
  // }
  // กรณี .map(member arrow function ไม่ต้องใช้ bind(this) และไม่ต้องใช้ function
  teamSummary: function () {
    // this === team
    return this.members.map(member => `${member} is on team ${this.teamName}`);
  }
};

console.log(team.teamSummary()); // [ 'Jame is on team Super Squad', 'John is on team Super Squad' ]
// ถ้าใน ES5 ที่ใช้ .map(function จะต้องใช้ bind(this) แต่ใน ES6 ไม่ต้องใช้ ถ้าไม่ใช้.bind(this)
// ['Jame is on team undefined', 'John is on team undefined']
