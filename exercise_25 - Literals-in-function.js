// Literals in Functions
// Refactor to use enhanced literal notation
// from this
// const canvasDimensions = function (width, initialHeight) {
//   const height = (initialHeight * 9) / 16;
//   return {
//     width: width,
//     height: height
//   };
// };
// to this โดยตัด width: width, height: height ออก เหลือแค่ใช้ width, height
const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return { width, height };
};
