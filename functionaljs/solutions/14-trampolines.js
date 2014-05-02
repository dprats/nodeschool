//PROBLEM

// Modify the boilerplate below such that it uses a trampoline to
// continuously call itself synchronously.

//SOLUTION

function repeat(operation, num){
	//modify this so it does not cause a stack overflow
	if (num <=0) return;
	operation();
	return repeat(operation, --num);
}

function trampoline(fn){

}

module.exports = function(operation, num){
	return repeat(operation, num);
}

function factorial(n){
	//_factorial is a variable
	console.log('declaring _factorial...');
	var _factorial = function myself(acc,n){
		console.log('     calling myself(%s,%s)',acc,n);
		return n? myself(acc*n, n-1):acc;
	}

	return _factorial(1,n);
}

console.log(factorial(5));