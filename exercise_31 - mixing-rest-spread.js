// Mixing Rest and Spread Parameters
// from this
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }
// to this
function unshift(array, ...rest) {
  // ใช้ rest parameter ในการรับค่าที่เหลือทั้งหมด
  return [...rest, ...array]; // ใช้ spread operator ในการนำค่าทั้งหมดใน array มารวมกัน
}
