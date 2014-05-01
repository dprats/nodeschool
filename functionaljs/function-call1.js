// function(){
// 	var args = slice.call(arguments); //this works
// }

// // we want this to works
// var slice = yourFunction;

// function(){
// 	var args = slice(arguments) //this works
// }

// //create function 'slice' that does the following

// var nums = [1,2,3,4,5];

// //your slice should match regular behavior of slice
// //except it takes the array as the first arguments

// slice(nums, 0, 2); // [1,2]
// slice(nums, 1, 2); // [2]

// //regular slice
// nums.slice(0,2) // [1,2]
// nums.slice(1,2) // [2]

// var myFunction(){
// 	console.log('called my function');
// }

// Function.prototype.call(myFunction); //"called my function"

module.exports = Function.call.bind(Array.prototype.slice);
               //Function.call(function with this="Array.prototype.slice")                