/*Arrow Functions Aren't Always a Solution
Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?*/
// const profile = {
//    name: 'Alex'
// };
const profile = {
  name: 'Alex',
  getName: function () {
    return this.name;
  }
};
