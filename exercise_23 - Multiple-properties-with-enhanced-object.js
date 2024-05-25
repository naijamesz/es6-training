/* โจทย์
Multiple Properties with Enhanced Notation
Refactor to use enhanced literal notation */
// แปลงให้ใช้ enhanced literal notation
// const red = '#ff0000';
// const blue = '#0000ff';

// const COLORS = { red: red, blue: blue };
// to be this โดยตัด red: red, blue: blue ออก เหลือแค่ใช้ red, blue
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

// แบบฝฝึกหัด create book shop
function createBookShop(inventory) {
  return {
    // ใช้ inventory: inventory, หรือ inventory แบบย่อก็ได้
    inventory, // inventory คือ array ของหนังสือที่มี title และ price
    // inventoryValue: function () {
    // ใช้แบบ function แบบย่อ
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0); // inventoryValue คือ function ที่ใช้หาราคาของหนังสือทั้งหมด
    },
    // priceForTitle: function (title) { แบบใช้ function แบบเต็ม
    // ใช้แบบ function แบบย่อ
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    } // priceForTitle คือ function ที่ใช้หาราคาของหนังสือที่ชื่อ title
  };
}

// สร้าง inventory ของหนังสือ 2 เล่ม
const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

console.log(createBookShop(inventory).inventoryValue()); // 25 // ราคาหนังสือทั้งหมด 10 + 15 = 25
// ถ้าต้องการหาราคาของหนังสือที่ชื่อ Harry Potter ให้ใช้ priceForTitle หลังจากเรียกใช้ createBookShop(inventory)แล้ว
console.log(createBookShop(inventory).priceForTitle('Harry Potter')); // 10 // ราคาหนังสือ Harry Potter คือ 10

// When to use enhanced object literal syntax

// สาธิตการใช้ ajax ในการ save file โดยใช้ enhanced object literal syntax ในกรณีที่ key และ value มีชื่อเดียวกันเช่น url: url, data: data ให้ใช้ url, data แทนได้เลย
// function saveFile(url, data) {
//   $.ajax({ method: 'POST', url: url, data: data }); // แบบที่ไม่ทำการ Refactor
//   $.ajax({ method: 'POST', url, data }); // แบบที่ทำการย่อแล้ว
// }
// const url = 'http://fileupload.com';
// const data = { color: 'red' };

// saveFile(url, data);
