// Dumping Unused Code
// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
// from this
// function addOffset(style) {
//   if (!style) {
//     style = {};
//   }

//   style.offset = '10px';

//   return style;
// }
// to this use default parameter ให้ style = {}(object)
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}
