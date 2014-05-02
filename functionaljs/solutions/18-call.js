//PROBLEM

// Write a function that allows you to use `Array.prototype.slice` without 
// using `.call` to invoke it.

// Normally you have to use slice with call or apply:

// ```js

// var slice = Array.prototype.slice

// function() {
//   var args = slice.call(arguments) // this works
// }

// ```

// We want this to work:

// ```js
// var slice = yourFunction

// function() {
//   var args = slice(arguments) // this works
// }

//SOLUTION



module.exports = Function.call.bind(Array.prototype.slice);