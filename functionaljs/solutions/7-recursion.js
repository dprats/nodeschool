//RECURSION

//Implement Array#reduce using recursion

//artificial reduce function will be passed an
//array of words and a function and an initial value
//which will return an object containing the counts
//for each word found in the array.

//inputs
//a) array of words
//b) function
//c) initial value

//SOLUTION

//take an array ["apple", "banana",etc...] and return {"apple": 1, banana: "1" }

function reduce(arr, fn, initial){
	//"reduce" returns a FUNCTION which we call
	// the format is the following:
	// return (function reduceOne(index,value))(0, initial)
	// OR return (reduceOne(0, initial))
	// where reduceOne is already defined
	return (function reduceOne(index,value){
					//CASE 1: If the index we are looking at
					//is the last in the array, new function
					//returns the value passed to reduceOne
					if (index > arr.length -1) {
						return value;
					}

					//CASE 2: calculate values by using fn()
					//and pass it to the next step
					return reduceOne(index + 1, fn(value, arr[index], index,arr))
				})(0,initial) //calls the function created with values (0, initial)
}


module.exports = reduce;