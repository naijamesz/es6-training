const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

// function isEngineer({ title, department }) {
// const title = profile.title;
// const department = profile.department;
// return title === 'Engineer' && department === 'Engineering';
// }

// ES6
function isEngineer1({ title = profile.title, department = profile.department }) {
  return title === 'Engineer' && department === 'Engineering';
}
console.log(isEngineer1(profile));
