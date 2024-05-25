// Refactor code จาก exercise_39.js โดยใช้ Symbol.iterator ในการทำ generator function แทนการสร้าง TeamIterator ที่มีความซับซ้อนและยุ่งเหยิงให้สามารถเข้าใจได้ง่ายขึ้น
const testingTeam = {
  lead: 'Amanda', // lead หัวหน้าทีม
  tester: 'Bill', // tester ผู้ทดสอบ
  // คือการระบุว่า object นี้สามารถเข้าถึงได้ด้วยการวนลูป โดยใช้ for...of loop หรือไม่
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam, // testingTeam ทีมทดสอบ
  size: 3, // size จำนวนคนในทีม
  department: 'Engineering', // department แผนก
  lead: 'Jack', // lead หัวหน้าทีม
  manager: 'Alex', // manager ผู้จัดการ
  engineering: 'Dave', // engineering วิศวกร
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineering;
    yield* this.testingTeam;
  }
};
// สามารถลบ TeamIterator ได้เนื่องจากเราได้เพิ่ม [Symbol.iterator]: function* () ใน testingTeam แล้ว

// ฟังก์ชั่นทีมทดสอบ 2nd generator function

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names); // [ 'Jack', 'Alex', 'Dave', 'Amanda', 'Bill' ]

/*
///////////// Engineering Team /////////////
===========================================
||Lead||Manager||Engineering||Testing Team||
===========================================
                                   ⬇️
                    Testing Team👇🏻 ⬇️
                            ===============
                            ||Lead||Tester||
===========================================

 */
