function findWhere(array, criteria) {
  return array.find(function (element) {
    const property = Object.keys(criteria)[0];
    return element[property] === criteria[property];
  });
}
