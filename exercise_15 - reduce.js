// Reducing Properties Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you. Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

// ใช้ Reduce เพื่อสร้างสิ่งของที่ขึ้นมานับจำนวน sitting และ standing desks โดย returnในรูปแบบ '{sitting: 3, standing: 2}' โดยนำค่าเริ่มต้นจาก desks แล้วส่งคืนอ็อบเจ็กต์ตัวสะสม (อาร์กิวเมนต์แรกของฟังก์ชันที่ได้ทำการวนซ้ำ)
const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

const deskTypes = desks.reduce(
  function (sum, desk) {
    if (desk.type === 'sitting') {
      sum.sitting++;
    } else {
      sum.standing++;
    }

    return sum;
  },
  { sitting: 0, standing: 0 }
);
console.log(deskTypes); //  sitting: 3, standing: 2 }

// แบบฝึกหัด
function balancedParens(string) {
  return !string.split('').reduce(function (previous, char) {
    if (previous < 0) return previous;
    if (char === '(') return ++previous;
    if (char === ')') return --previous;
    return previous;
  }, 0);
}

console.log(balancedParens('((())))')); // false ในกรณีที่ ( มีมากกว่า )
console.log(balancedParens('((()))')); // true ในกรณีที่ ( มีเท่ากับ )
console.log(balancedParens('')); // true ในกรณีที่ไม่มี ( และ )
