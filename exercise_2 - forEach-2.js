// for ใช้ในการวนลูปตามค่า index ของ array
// forEach ใช้ในการวนลูปตามค่าของ array โดยไม่สนใจ index หรือจะให้ง่ายๆคือเพื่อเข้าถึงข้อมูลใน array ต่างๆ โดยไม่ต้องประกาศค่า index ในการวนลูปตัั้งแต่เริ่มต้นจนถึง index สุดท้ายใน array
// for...in นั้นใช้ในการวนลูปสำหรับ Object ซ฿่งจะได้ key ของ Object ออกมา แต่ไม่ใช่ value ของ key นั้นๆ และไม่สามารถใช้กับ Array ได้ ** ได้เฉพาะ key หรือ properties ของ Object นั้นๆ เท่านั้นไจะไม่ได้รับ value

// for...of ตัวนี้จะใช้งานได้กับ iterable object(Object ที่วนลูปได้) หมายความว่าอะไรก็ตามที่สามารถวนลูปได้
// ***จะสามารถใช้ for…of ได้นั่นเอง เช่น Array, set หรือแม้แต่ string ก็สามารถใช้ได้***
const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

const areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width);
});
