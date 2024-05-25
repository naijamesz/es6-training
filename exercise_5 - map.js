// ฟังก์ชั่น pluck ที่รับค่าเป็น array และ property แล้ว return array ใหม่ที่เก็บค่า property ของแต่ละ element ใน array ตัวเดิมโดยจะแสดงเฉพาะค่าของ property ที่เราต้องการ
function pluck(array, property) {
  return array.map(element => {
    console.log(typeof element[property]); // string
    return element[property];
  });
}
console.log(pluck([{ name: 'Tim' }, { name: 'Matt' }, { name: 'Elie' }], 'name')); // ['Tim', 'Matt', 'Elie']
