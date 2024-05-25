// Promise and Fetch are used to make a request to the server and get the data back.
// ใช้ Promise และ Fetch ในการทำการร้องขอไปยังเซิร์ฟเวอร์และรับข้อมูลกลับมา เนื่องจากการส่งคำขอไปยังเซิร์ฟเวอร์และรับข data จากเซิร์ฟเวอร์มีเวลาที่ไม่แน่นอน และเราไม่สามารถรู้ได้ว่าเมื่อไหร่เซิร์ฟเวอร์จะส่งข้อมูลกลับมาจึงจำเป็นต้องใช้ Promise ในการจัดการกับเวลาที่ไม่แน่นอนนั้น และเมื่อเราได้รับข้อมูลกลับมาแล้วเราจะใช้ Fetch ในการดึงข้อมูลนั้นออกมาใช้งาน โดยการทำงานแบบนี้เรียกว่า Asynchronous หรือ การทำงานแบบไม่รอให้เสร็จก่อน
/*
// Apsolute time to do this : 1miliseconds
const url = 'http://www.example.com'
                                          makeRequest(url) 👇🏻
// Absolute time to do this : 3seconds   ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️ Internet 🔁
data = makeRequest(url)                  ⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅ Internet 🔁
                                          got data back!
// Absolute time to do this : 1seconds
console.log(data);
*/

/*
3 States of Promise : มี 3 สถานะของ Promise
Promise {
  pending:{  // status :1
    console.log('pending');
    // 1.1 Callback function ที่จะทำงานเมื่อสถานะเป็น pending
    then : function(){} // รอการดำเนินการหรือรอดำเนินการแก้ไข
  },
  resolved:{ // status :2
    console.log('resolved');
  },
  rejected:{ // status :3
    // 3.1 callbacks function ที่จะทำงานเมื่อสถานะเป็น rejected
    catch : function(){} // การดำเนินการไม่สำเร็จหรือไม่สามารถดำเนินการได้
    console.log('rejected');
  }

}
1. Pending or unresolved : รอการดำเนินการหรือรอดำเนินการแก้ไข ➡️➡️➡️ then
2. Resolved: การดำเนินการกำลังจะเสร็จสิ้นหรือเสร็จสิ้นแล้ว
3. Rejected: การดำเนินการไม่สำเร็จหรือไม่สามารถดำเนินการได้ ➡️➡️➡️ catch
 */
// ตัวอย่างการใช้ Promise

const promise = new Promise((resolve, reject) => {
  // การทำงานที่จะใช้เวลา 3วิ
  setTimeout(() => {
    resolve('success');
    reject('error');
  }, 3000);
});
// ตัวอย่างการใช้ .then() ในการดำเนินการเมื่อสถานะเป็น resolved
promise.then(data => {
  console.log(data); // success
});
// ตัวอย่างการใช้ .catch() ในการดำเนินการเมื่อสถานะเป็น rejected
promise.catch(error => {
  console.log(error); // error // ถ้าเกิด error จะแสดง error
});

promise
  .then(data => {
    console.log(data); // success
  })
  .catch(error => {
    console.log(error); // error
  });
