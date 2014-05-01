//recursive function is  a function which calls itself

//we will use your reduce implementation to execute our solution
//to the previous basic_reduce problem.

//your reduce function will be passed an array of words and a function


//structure

function reduce(arr, fn, initial) {
	//start recursion loop
    return (function reduceOne(index, value) {
    	//terminating condition
      if (index > arr.length - 1){ 

      	console.log('end condition');
      	return value;} // end condition

      return reduceOne(index + 1, 
      								fn(value, arr[index], index, arr)
      								) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
  }
  
  module.exports = reduce
