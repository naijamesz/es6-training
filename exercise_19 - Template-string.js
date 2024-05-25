function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

// แบบฝึกหัด
function getMessage() {
  // แบบที่ 1
  // const year = new Date().getFullYear();
  // return `The year is ${year}`;
  // แบบที่ 2
  return `The year is ${new Date().getFullYear()}`; // ถ้าต้องการแทรกค่าหรือตัวแปรลงใน template string `` ต้องมี${ตัวแปร} เสมอ
}
console.log(getMessage()); // The year is 2024
