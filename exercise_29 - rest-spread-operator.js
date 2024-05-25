// Many, Many Arguments
// Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
// from function product(a, b, c, d, e) { to this below
// to this
function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}
console.log(product(1, 2, 3, 4, 5, 6, 7)); // 5040

// แบบฝึกหัด rest and spread operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7)); // 28

// แบบฝึกหัด rest and spread operator
// นำ array มารวมกัน
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

// เหมือนกันทั้งคู่ ...array คือ ทุกๆสมาชิกใน arrayทั้งหมด
console.log(defaultColors.concat(userFavoriteColors)); // ['red', 'green', 'orange', 'yellow']
console.log([...defaultColors, ...userFavoriteColors]); // ['red', 'green', 'orange', 'yellow']
console.log([...defaultColors, userFavoriteColors]); // [ 'red', 'green', [ 'orange', 'yellow' ] ] // ถ้าไม่ใส่ ... จะเห็นว่า userFavoriteColors จะเป็น array ย่อยของ defaultColors

// แบบฝึกหัด validate shopping list ...items คือ ทุกๆสมาชิกใน items ทั้งหมด
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    // items.indexof('milk')<0 คือ ถ้าไม่มี 'milk' ใน items ให้เพิ่ม 'milk' ไปด้านหน้าของ itemsหรือตำแหน่งทีั่ 0 (index 0)
    return ['milk', ...items];
  }
  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs')); // ['milk', 'oranges', 'bread', 'eggs']
