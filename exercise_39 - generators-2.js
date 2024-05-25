//คำจำกัดความของ Symbol.iterator คือ คำสำคัญที่ใช้ในการกำหนดว่า object นั้นสามารถเข้าถึงได้ด้วยการวนลูป โดยใช้ for...of loop หรือไม่ เช่น array, string, map, set, arguments object และ yeild* ก็เป็นตัวอย่างหนึ่งของการใช้ Symbol.iterator โดยเหมือนกับว่าถ่ายทอดความสามารถในการวนลูปของ object นั้นๆ ให้กับ generator function ที่เราเพิ่มเข้าไปใน object นั้นๆจะถูกรวมไปด้วย

// โดยจะทำการสร้าง testingTeam ที่เป็นส่วนหนึ่งของ engineeringTeam โดยใช้ generator function ชื่อ TeamIterator โดยให้ return ชื่อของทีมทั้งหมดใน engineeringTeam และ testingTeam
const testingTeam = {
  lead: 'Amanda', // lead หัวหน้าทีม
  tester: 'Bill', // tester ผู้ทดสอบ
  [Symbol.iterator]: function* () {
    // คือการระบุว่า object นี้สามารถเข้าถึงได้ด้วยการวนลูป โดยใช้ for...of loop หรือไม่
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
  engineering: 'Dave' // engineering วิศวกร
};

// สร้าง generator function ชื่อ TeamIterator โดยรับ parameter เป็น team
function* TeamIterator(team) {
  yield team.lead; // ให้ yield มี value เป็น team.lead
  yield team.manager; // ให้ yield มี value เป็น team.manager
  yield team.engineering; // ให้ yield มี value เป็น team.engineering
  // const testingTeamGenerators = TestingTeamIterator(team.testingTeam);
  // กรณีที่ยังไม่เพิ่ม [Symbol.iterator]:function*() ใน testingTeam จะต้องสร้าง generator function ที่ชื่อว่า testingTeamIterator โดยให้ parameter เป็น team.testingTeam ส่วนในกรณีที่มี Symbol.iterator อยู่แล้วจะไม่ต้องสร้าง generator function ใหม่ให้เปลี่ยนจาก yield* testingTeamGenerators เป็น yield* team.testingTeam แทน
  yield* team.testingTeam; // ให้ yield* มี value เป็น team.testingTeam
}
// Line 21 - 22 เมื่อเพิ่ม * หลัง yield จะทำให้เรียกใช้ generator function ได้ โดยผลลัพธ์เดิมที่ได้จะเป็น [ 'Jack', 'Alex', 'Dave' ] ซึ่งเป็นทีมทั้งหมดใน engineeringTeam ยังไม่รวม testingTeam หลังจากนั้นจะเรียกใช้ generator function ที่ชื่อว่า TestingTeamIterator โดยให้ parameter เป็น team.testingTeam เพื่อให้ได้ผลลัพธ์เป็น [ 'Amanda', 'Bill' ] ซึ่งเป็นทีมทดสอบ และเมื่อรวมทั้งหมดจะได้ผลลัพธ์เป็น [ 'Jack', 'Alex', 'Dave', 'Amanda', 'Bill' ]

// สรุป จะมีความคล้ายกับการเรียกใช้ฟังก์ชั่นทีมทดสอบ 2nd generator function ที่เรียกใช้งานจาก TeamIterator โดยใช้ yield* แทน yield เพื่อให้ได้ผลลัพธ์ที่เป็น array ทั้งหมดก่อนที่จะไปถึง testingTeam และเมื่อรวมทั้งหมดจะได้ผลลัพธ์เป็น [ 'Jack', 'Alex', 'Dave', 'Amanda', 'Bill' ]

// ฟังก์ชั่นทีมทดสอบ 2nd generator function
function* TestingTeamIterator(team) {
  yield team.lead; // ให้ yield มี value เป็น team.lead
  yield team.tester; // ให้ yield มี value เป็น team.tester
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names); // [ 'Jack', 'Alex', 'Dave' ] ถ้าหากรวม testingTeam จะได้ [ 'Jack', 'Alex', 'Dave', 'Amanda', 'Bill' ]

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
