// Hardmode: Custom 'Unique' Helper
// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]
// Hint: Use the 'reduce' and 'find' helpers.

var array = [1, 1, 2, 3, 4, 4, 6, 6, 7, 8];
function unique(array) {
  return array.reduce(function (acc, element) {
    const existingElement = acc.find(function (target) {
      return target === element;
    });
    if (!existingElement) {
      acc.push(element);
    }
    return acc;
  }, []);
}

console.log(unique(array));
