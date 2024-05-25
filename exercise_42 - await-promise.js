// ตัวอย่างการใช้ Fetch API
// การใช้ Fetch ในการดึงข้อมูลจากเซิร์ฟเวอร์
// ตัวอย่างการใช้ Fetch ในการดึงข้อมูลจากเซิร์ฟเวอร์
var url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url)
  .then(response => console.log(response.json()))
  .catch(error => console.log('error'));
