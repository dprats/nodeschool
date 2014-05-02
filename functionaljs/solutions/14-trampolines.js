//PROBLEM

// Modify the boilerplate below such that it uses a trampoline to
// continuously call itself synchronously.

//SOLUTION

function repeat(operation, num){

	if (num <= 0) return;
	
	//return a function which trampoline will call again
	//instead of calling repeat(operation, --num)
	//trampoline will see it is a function, call the function
	//as many times as necessary as we get to num == 0;
	return function(){
		//perform the operation
		operation();
		//function returns another iteration of repeat
		return repeat(operation,--num);
	}
}

function trampoline(fn){
	//loop runs while the operation is still a function
	// it stops as soon as it returns a value
	while(fn && typeof fn == 'function'){
		fn = fn(); //call the operation
	}
	//return the last value from calling function
	//multiple times until we reach a non-function result
}

module.exports = function(operation, num){
	//trampoline function calls the operation passed until it returns 
	//a non-function
	//trampoline(fn) = trampoline(f(){repeat})
	trampoline(function(){
		return repeat(operation, num);
	});	
}