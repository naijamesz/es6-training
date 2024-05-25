// Using Default Arguments
// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
// from this
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0;
//   }

//   if (b === undefined) {
//     b = 0;
//   }

//   return a + b;
// }
// to this โดยใช้ default parameter ให้กำหนดค่าเริ่มต้นให้กับ parameter ในฟังก์ชั่น
function sum(a = 0, b = 0) {
  return a + b;
}

// Defalut parameter หรือ default argument คือการกำหนดค่าเริ่มต้นให้กับ parameter ของ function ในกรณีที่ไม่ได้รับค่ามา
// // แบบฝึกหัด
// function User(id) {
//   this.id = id;
// }

// function generateId() {
//   return Math.random() * 9999999;
// }

// function createAdminUser(user) {
//   user.admin = true;
//   return user;
// }

// console.log(createAdminUser(new User(generateId()))); // User { id: 1234567.1234567, admin: true } ไอดีเปลีย่นตลอด ในกรณีที่ไม่มีการกำหนดค่าเริ่มต้นให้กับ parameter ของ function User และ generateId

// แบบฝึกหัดในกรณีใช้ default parameter ให้กำหนดค่าเริ่มต้นให้กับ parameter ของ function User และ generateId
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}
// ใช้ default parameter(arguments) user = new User(generateId()))
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

console.log(createAdminUser()); // User { id: 6252163.273769153, admin: true } ไอดีเปลีย่นตลอด ในกรณีที่มีการกำหนดค่าเริ่มต้นให้กับ parameter ของ function User และ generateId
