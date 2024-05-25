// Refactor to use enhanced literal notation
// from this
// const color = 'red';

// const Car = {
//   color: color,
//   drive: function () {
//     return 'Vroom!';
//   },
//   getColor: function () {
//     return this.color;
//   }
// };
// to this โดยตัด color: color ออก เหลือแค่ใช้ color และใช้ function แบบย่อโดยตัด function ออก เหลือแค่ drive() { return 'Vroom!'; } และ getColor() { return this.color; }

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
