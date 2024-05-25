/* Stacks! */
// functions: push, pop, peek, length first in first out

const letters = []; // this is our stack
const word = 'racecar';
let reverseWord = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
word.slice(element => {
  letters.push(element);
});

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

word.slice(element => {
  reverseWord += letters.pop();
});

if (reverseWord === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

// Creates a stack

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };
    // Removes and returns the value at the end of the stack
    this.pop = function (result) {
      this.count === 0 ? undefined : this.count--;
      result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };
    // Returns the length of the stack
    this.size = function () {
      return this.count;
    };

    // returns the value at the end of the stack
    this.peek = function (value) {
      return this.storage[this.count - 1];
    };

    // returns the length of the stack
    this.length = function () {
      return this.count;
    };

    this.map = function (callback) {
      return Object.values(this.storage).map(callback);
    };
    this.filter = function (callback) {
      return Object.values(this.storage).filter(callback);
    };
  }
}

const myStack = new Stack();
myStack.push('freecodecamp'); // is added freecodecamp to the stack
myStack.push('facebook'); // is added facebook to the stack
myStack.push('twitter'); // is added twitter to the stack
myStack.push('instagram'); // is added instagram to the stack
myStack.push('linkedin'); // is added linkedin to the stack
myStack.push('github'); // is added github to the stack
myStack.push('stackoverflow'); // is added stackoverflow to the stack
// myStack.pop(); // is removed stackoverflow from the stack

console.log(myStack.peek()); // Output: stackoverflow
console.log(myStack.length()); // Output: 7
console.log(myStack.size()); // Output: 7
console.log(myStack.map(value => value.toLowerCase())); // Output: ['freecodecamp', 'facebook', 'twitter', 'instagram', 'linkedin', 'github', 'stackoverflow']
console.log(myStack.map(value => value.toUpperCase())); // Output: ['FREECODECAMP', 'FACEBOOK', 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'GITHUB', 'STACKOVERFLOW']
console.log(myStack.peek()); // Output last element in the stack is : stackoverflow

// console.log(myStack.pop()); // Output: remove stackoverflow
// console.log(myStack.pop()); // Output: remove data === github from the stack
console.log(myStack.map(value => value.toUpperCase()));

// console.log(stack.length()); // Output: 3
// console.log(stack.peek()); // Output: 3
// console.log(stack.pop()); // Output: 3
// console.log(stack.length()); // Output: 2

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.items.length === 0) {
//       return 'Underflow';
//     }
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   length() {
//     return this.items.length;
//   }
// }

// // Usage:
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.length()); // Output: 3
// console.log(stack.peek()); // Output: 3
// console.log(stack.pop()); // Output: 3
// console.log(stack.length()); // Output: 2
