// Old way of doing things

// const computers = [
//   { name: 'Apple;', ram: 24 },
//   { name: 'Compaq', ram: 4 },
//   { name: 'Acer', ram: 32 }
// ];
// var allComputersCanRunProgram = true;
// var onlySomeComputersCanRunProgram = false;

// for (let i = 0; i < computers.length; i++) {
//   let computer = computers[i];
//   if (computer.ram < 16) {
//     allComputersCanRunProgram = false;
//   } else {
//     onlySomeComputersCanRunProgram = true;
//   }
//   // ternary operator
//   // (computer.ram < 16 ? (allComputersCanRunProgram = false) : (onlySomeComputersCanRunProgram = true));
// }
// console.log(allComputersCanRunProgram); // false
// console.log(onlySomeComputersCanRunProgram); // true

// New way of doing things
const computers = [
  { name: 'Apple;', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

computers.every(computer => {
  return computer.ram < 16;
});
// console.log(computers.every(computer => computer.ram > 16));
console.log(
  computers.every(function (computer) {
    // computer.ram > 0 true for all
    return computer.ram > 0;
    // computer.ram > 16 false for all
  })
);

function Field(value) {
  this.value = value;
}
Field.prototype.validate = function () {
  return this.value.length > 0;
};

const username = new Field('username'); // true
// const username = new Field(''); // false if empty strung = false
const password = new Field('password'); // true
// const password = new Field(''); // false if empty strung = false
const birthday = new Field('10/10/2010'); // true
// const birthday = new Field(''); // false if empty strung = false

// username.validate() && password.validate() && birthday.validate();
const fields = [username, password, birthday];
const formIsValid = fields.every(field => field.validate());
// if else statement
if (!formIsValid) {
  console.log(`Form is invalid, please correct the errors`);
} else {
  console.log(`Form is valid allow  user to submit`);
}
// ternary operator
!formIsValid
  ? console.log(`Form is valid allow  user to submit`)
  : console.log(`Form is invalid, please correct the errors`);

// หรือจะใช้แบบนี้ก็ได้
// if (formIsValid) {
//   console.log(`Form is valid allow  user to submit`);
// } else {
//   console.log(`Form is invalid, please correct the errors`);
// }
// ถ้าเขียนแบบใน JSX
// {formIsValid ? <button onSubmit={() => sumitForm()}>Submit</button> : null}
// {!formIsValid ? null : <button onClick={() => submitForm()}>Submit</button>}

const users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

const hasSubmitted = users.every(function (user) {
  return user.hasSubmitted;
});
