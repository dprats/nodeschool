//PROBLEM

// In this challenge, we're going to implement a 'curry' 
// function for an arbitrary number of arguments.

// `curryN` will take two parameters:

// a) fn: The function we want to curry.
// b) n: Optional number of arguments to curry.
//   If not supplied, `curryN` should use the fn's arity 
//   as the value for `n`.

//NOTES
//This solution was heavily improved and refactored once the 
//"official" solution was revealed by the workshopper

//SOLUTION

function curryN(fn,n){

	//if curryN is not passed an "n", we use fn.'s length
	if (typeof n != 'number') n = fn.length;

	//define a function to curry fn as many times
	//as fn has arguments
	function getCurriedFn(prev){

		return function(arg){
			//concat the previously received arguments with new ones
			var args = prev.concat(arg);
			//if the number of arguments < n, then we are NOT done currying
			if ( args.length < n) return getCurriedFn(args);
			//if we are still currying, call getCurriedFn again
			else return fn.apply(this, args);
	
		}
	}

	//return the currying-function with an empty array
	console.log(arguments);
	return getCurriedFn([])

}

function add3(one, two, three) {
  return one + two + three
}



module.exports = curryN;

//testing it
// console.log(curryN(add3,3)(1)(2).arguments);
