/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
  // Code block
  return a + b
}

let sum = addTwoNumbers(1, 2);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
  // Code block
  return a + b
}

let sum2 = addTwoNumbers2(1, 2);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => a + b;
//or
const addTwoNumbers4 = (a, b) => (a + b);

let sum3 = addTwoNumbers4(3, 4);
let sum4 = addTwoNumbers4(4, 4);

console.log(sum3, sum4)

// Implicit Returns

const saySomesting = message => console.log(message);
saySomesting("Hi!");
//or func with out parameters
const sayHello = () => console.log("Hello!");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
  `<p>
    This is a multiline string!
  </p>`
)

console.log(returnMultipleLines());
