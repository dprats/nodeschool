//higher f(x) that takes function and calls it N times

function repeat(f,n){
	// f();
	if(n < 1){ return; }
	f();
	return repeat(f, n-1);
}

module.exports = repeat;