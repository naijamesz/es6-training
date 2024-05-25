// Spreadin' Arrays
// Refactor the following to use the spread operator.
// from this
// function join(array1, array2) {
// return array1.concat(array2);
// }
// to this
function join(array1, array2) {
  return [...array1, ...array2];
}
