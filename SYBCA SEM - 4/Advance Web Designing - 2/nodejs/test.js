// Import the module
// const math = require('./lib/maths');

//array destructuring
const { add, subtract, multiply, divide } = require("./lib/maths");

// Use the functions
console.log('Addition:', add(10, 5));        // Output: 15
console.log('Subtraction:', subtract(10, 5)); // Output: 5
console.log('Multiplication:', multiply(10, 5)); // Output: 50
console.log('Division:', divide(10, 5));     // Output: 2
