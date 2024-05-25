function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// // PHP แปลงเป็น Javascript ตัวอย่าง
// // $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"password":"'.$password.'"}';
// // กรณี es5 ของ Javascript ซึ่งต่างก็ยุ่งยากไม่แพ้กัน
// var data =
//   '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","password":"' + password + '"}';
// console.log(data);

// แต่ถ้าใช้ Template string จะสะดวกมากขึ้น
const device_id = 4;
const guid = 20;
const username = 'hello';
const password = 'world';
const dataEs6 = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}","password":"${password}"}`;
console.log(dataEs6); // '{"device_id":"4","guid":"20","username":"hello","password":"world"}'
